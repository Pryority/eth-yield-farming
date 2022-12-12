// SCRAPE SCRIPT
// -----------------------------------------

const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const url = "https://etherscan.io/yieldfarms";

async function main() {
  // const result = await request.get("http://codingwithstefan.com/table-example");
  const result = await request.get(url);
  const $ = cheerio.load(result);
  const farms = [];
  // $("body > table > tbody > tr > td > div > img").each((index, element) => {
  $("#mytable > tbody > tr > td > div").each((index, element) => {
    console.log(element);
    // farms.push(element);
  });
  createJson(farms);
}

const createJson = (dataArray) => {
  fs.writeFileSync("farms.json", JSON.stringify(dataArray));
  console.log(`Success! ${url} was scraped.`);
};


// #mytable > tbody > tr:nth-child(1) > td:nth-child(1) > div > img

// #mytable > tbody > tr:nth-child(1)

main();