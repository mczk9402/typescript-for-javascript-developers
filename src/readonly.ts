export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ハムさん');
console.log(myVisaCard.owner);
myVisaCard.owner = 'ベーコン';
// readonlyはアクセスはできるからpublicにも含まれるが省略はできるがtypescriptをしらない人には伝わらないかもしれない。
