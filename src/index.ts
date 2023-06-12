// Case 1
type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};
const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// Case 2
type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// Code Case 1 Soal No 1
function getFruitNames(): string[] {
  const fruitNames: string[] = [];

  for (const fruit of fruits) {
    if (!fruitNames.includes(fruit.fruitName.toLowerCase())) {
      fruitNames.push(fruit.fruitName.toLowerCase());
    }
  }

  return fruitNames;
}

const allFruitNames = getFruitNames();
console.log(`Soal Nomor 1: ${allFruitNames}`);

// Code Case 1 Soal No 2
function separateFruitsByType(): Map<string, string[]> {
  const fruitMap: Map<string, string[]> = new Map();

  for (const fruit of fruits) {
    const fruitType = fruit.fruitType;

    if (fruitMap.has(fruitType)) {
      fruitMap.get(fruitType)?.push(fruit.fruitName);
    } else {
      fruitMap.set(fruitType, [fruit.fruitName]);
    }
  }

  return fruitMap;
}

const fruitTypesMap = separateFruitsByType();
const numContainers = fruitTypesMap.size;

console.log(`Soal Nomor 2a: Jumlah wadah yang dibutuhkan: ${numContainers}`);

fruitTypesMap.forEach((fruits, fruitType) => {
  const fruitList = fruits.join(", ");
  console.log(
    `Soal Nomor 2b: Wadah dengan tipe buah ${fruitType}: ${fruitList}`
  );
});

// Code Case 1 Soal No 3
function calculateTotalStockByType(): Map<string, number> {
  const stockMap: Map<string, number> = new Map();

  for (const fruit of fruits) {
    const fruitType = fruit.fruitType;
    const stock = fruit.stock;

    if (stockMap.has(fruitType)) {
      const currentStock = stockMap.get(fruitType) || 0;
      stockMap.set(fruitType, currentStock + stock);
    } else {
      stockMap.set(fruitType, stock);
    }
  }

  return stockMap;
}

const totalStockByType = calculateTotalStockByType();

totalStockByType.forEach((totalStock, fruitType) => {
  console.log(
    `Soal Nomor 3: Total stok buah pada wadah dengan tipe ${fruitType}: ${totalStock}`
  );
});

// Jawaban Case 1 Soal No 4
console.log(
  "Soal nomor 4: Untuk saat ini saya belum memiliki komentar terhadap kasus ini, Terimakasih 😊 "
);

// Code Case 2 Soal No 5
function countComments(comments: IComment[]): number {
  let total = 0;

  for (const comment of comments) {
    total++; // Menambahkan komentar saat ini ke total

    if (comment.replies) {
      // Jika komentar saat ini memiliki balasan
      total += countComments(comment.replies); // Rekursi untuk menghitung balasan komentar
    }
  }

  return total;
}

// Menggunakan fungsi countComments untuk menghitung total komentar
const totalComments = countComments(comments);
console.log("Soal Nomor 5: Total komentar adalah", totalComments);
