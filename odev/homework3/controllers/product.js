const AWS=require('aws-sdk')
const productService=require('../services/product')

exports.add = async (req, res) => {
  const response =await productService.add(req.body);
  res.send(response)

};

exports.fetchAll=async(req,res) => {
  const response=await productService.fetchAll();
  res.send(response)

}

exports.singleFetch = async (req, res) => {
  const response=await productService.singleFetch(req.params);
  res.send(response)

}

exports.delete = async (req, res) => {
  const response=await productService.delete(req.body);
  res.send(response)

};

exports.put = async (req, res) => {
  const response=await productService.update(req.body);
  res.send(response)

};

exports.discountFetch=async(req,res) => {
  const response=await productService.discount();
  res.send(response)

}