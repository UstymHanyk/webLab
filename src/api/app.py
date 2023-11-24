from flask import Flask, jsonify, request
import mysql.connector

app = Flask(__name__)

# Establish MySQL connection
mydb = mysql.connector.connect(
    host="localhost",
    port="3306",
    user="root",
    password="admin",
    database="iot_db"
)


def fetch_all_gemstones():
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT * FROM gemstones_table")
    gemstones_data = cursor.fetchall()
    cursor.close()
    return gemstones_data

@app.route('/all', methods=['GET'])
def get_all_gemstones():
    gemstones_data = fetch_all_gemstones()
    return jsonify(gemstones_data)


@app.route('/filtered', methods=['GET'])
def get_filtered_gemstones():
    gemstones_data = fetch_all_gemstones()
    name = request.args.get('name', '')
    gem_type = request.args.get('type', 'All Types')
    price_min = request.args.get('price_min', 0)
    price_max = request.args.get('price_max', 10000)
    karats_min = request.args.get('karats_min', 0)
    karats_max = request.args.get('karats_max', 20)
    hardness_min = request.args.get('hardness_min', 0)
    hardness_max = request.args.get('hardness_max', 10)
    sort_by = request.args.get('sort_by', 'price')
    sort_direction = request.args.get('sort_direction', 'asc')

    # Convert the received parameters to appropriate data types
    price_min = float(price_min)
    price_max = float(price_max)
    karats_min = int(karats_min)
    karats_max = int(karats_max)
    hardness_min = int(hardness_min)
    hardness_max = int(hardness_max)

    filtered_gemstones = [
        gemstone for gemstone in gemstones_data
        if (name.lower() in gemstone['name'].lower())
        and (gem_type == 'All Types' or gemstone['type'] == gem_type)
        and (price_min <= gemstone['price'] <= price_max)
        and (karats_min <= gemstone['karats'] <= karats_max)
        and (hardness_min <= gemstone['hardness'] <= hardness_max)
    ]

    if sort_direction == 'asc':
        filtered_gemstones = sorted(filtered_gemstones, key=lambda x: x.get(sort_by, 0))
    else:
        filtered_gemstones = sorted(filtered_gemstones, key=lambda x: x.get(sort_by, 0), reverse=True)

    return jsonify(filtered_gemstones)


if __name__ == '__main__':
    app.run(debug=True)
