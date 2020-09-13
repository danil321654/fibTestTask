const mongoose = require("mongoose");
require("dotenv").config();
/*(async () => {
  try {
    connection = mongoose
      .connect(
        `mongodb+srv://socserver:55lowe55@Cluster0-3cro2.mongodb.net/database`,
        {useNewUrlParser: true, useUnifiedTopology: true}
      )
      .then(() => console.log("Connected to MongoDB..."))
      .catch(err => console.error("Coudn't connect MongoDB....", err));
    connection();
    const customerSchema = new mongoose.Schema({
      name: String,
      address: String,
      email: String
    });

    const Customer = mongoose.model("Customer", customerSchema);

    async function createNewCustomer() {
      const customer = new Customer({
        name: "new customer",
        address: "new address",
        email: "customer1@new.com"
      });
      const result = await customer.save();
      console.log(result);
    }
    createNewCustomer();
    return connection;
  } catch (err) {
    console.error(err.message);
  }
})();
*/
connection = mongoose
  .connect(
    `mongodb+srv://${process.env.clusterName}:${process.env.pswd}@${process.env.server}/${process.env.dbname}`,
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Coudn't connect MongoDB....", err));

const postSchema = new mongoose.Schema({
  originNum: String,
  resultNum: String,
  requestedDate: String
});

const Post = mongoose.model("Customer", postSchema);

async function createNewPost(originNum, resultNum) {
  const post = new Post({
    originNum: originNum,
    resultNum: resultNum,
    requestedDate: new Date()
  });
  const result = await post.save();

  console.log(result);
}

module.exports = {
  connection: connection,
  createNewPost: createNewPost,
  post: Post
};
