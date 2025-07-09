import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema({
  name: String,
  model: String,
  year: String,
  owner: String,
  rto: String,
  kms: String,
  description: String,
  price: String,
  phone: String,
  status: String,
  image: String,
  images: [String],
});

const Bike = mongoose.model('Bike', bikeSchema);
export default Bike;