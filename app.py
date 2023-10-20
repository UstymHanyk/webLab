from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

gemstones = [
    {"id": 1, "name": "Diamond", "carats": 2, "price": 3342},
    {"id": 2, "name": "Emerald", "carats": 5, "price": 124},
    {"id": 3, "name": "Ruby", "carats": 32, "price": 222222}
]
next_id = 4  

@app.route('/gemstones', methods=['GET'])
def get_gemstones():
    return jsonify({'gemstones': gemstones})

@app.route('/gemstones/<int:gemstone_id>', methods=['GET'])
def get_gemstone(gemstone_id):
    gemstone = next((gem for gem in gemstones if gem['id'] == gemstone_id), None)
    if gemstone:
        return jsonify({'gemstone': gemstone})
    return jsonify({'message': 'Gemstone not found'}), 404

@app.route('/gemstones', methods=['POST'])
def add_gemstone():
    global next_id
    if (request.json['carats']>0 and request.json['price'] >0):

        new_gemstone = {
            'id': next_id,
            'name': request.json['name'],
            'carats': request.json['carats'],
            'price': request.json['price']
        }
        gemstones.append(new_gemstone)
        next_id += 1
        return jsonify({'message': 'Gemstone added', 'gemstone': new_gemstone}), 201
    return jsonify({'message': 'Invalid input'}), 404


@app.route('/gemstones/<int:gemstone_id>', methods=['PUT'])
def update_gemstone(gemstone_id):
    gemstone = next((gem for gem in gemstones if gem['id'] == gemstone_id), None)
    if (request.json['carats']>0 and request.json['price'] >0):

        if gemstone:
            gemstone['name'] = request.json['name']
            gemstone['carats'] = request.json['carats']
            gemstone['price'] = request.json['price']
            return jsonify({'message': 'Gemstone updated', 'gemstone': gemstone})
        return jsonify({'message': 'Gemstone not found'}), 404
    return jsonify({'message': 'Invalid input'}), 404
    

@app.route('/gemstones/<int:gemstone_id>', methods=['DELETE'])
def delete_gemstone(gemstone_id):
    global gemstones
    gemstones = [gem for gem in gemstones if gem['id'] != gemstone_id]
    return jsonify({'message': 'Gemstone deleted'})

if __name__ == '__main__':
    app.run(debug=True)
