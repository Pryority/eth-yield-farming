from lxml import html
import requests

page = requests.get('https://etherscan.io/yieldfarms')
tree = html.fromstring(page.content)

# This will create a list of buyers:
buyers = tree.xpath(
    '//*[@id="mytable"]/tbody/tr[1]/td[1]/div/img')
# This will create a list of prices
# prices = tree.xpath('//span[@class="item-price"]/text()')

print('Buyers: ', buyers)
# print('Prices: ', prices)

# <img class = "u-sm-avatar mr-2" src = "/token/images/ddexx_32.png" >
