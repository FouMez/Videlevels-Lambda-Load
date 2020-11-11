const AWS = require("aws-sdk");
const S3 = new AWS.S3();

exports.handler = async (event) => {
   try {
    const userId = event.queryStringParameters.userid;
    const filename = event.queryStringParameters.filename;
    const filepath = `${userId}/${filename}`;

    const params = {
      Bucket: "makinchzhar",
      Key: filepath,
    };

    const file = await S3.getObject(params).promise();

    const response = {
      statusCode: 200,
      body: JSON.stringify(file.Body) ,
    };
    return response;
  } catch (err) {
    return err.message
  }
};
