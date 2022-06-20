// Example node

// [
// 	{
// 		"id": "ac0e9fe4-8de0-41e6-9656-b07b40194f47",
// 		"child_node_ids": ["f1f509be-e589-479e-a2d8-04cddbddc154", "9e145221-5a5a-446b-abdd-8092ced6a6cf"]
// 	},
// 	{
// 		"id": "59013ddb-d691-43c8-8274-7c87e1d739b4",
// 		"child_node_ids": []
// 	}
// ]

// Given a single starting node ID `089ef556-dfff-4ff2-9733-654645be56fe`, write an algorithm to traverse the complete node tree in order to answer the 2 following questions:

// 1. What is the total number of unique nodes?
// 2. Which node ID is shared the most among all other nodes?

const nodeCounter = (node, counter, highestCount) => {
  counter[node.id] ? counter[node.id]++ : (counter[node.id] = 1);
  highestCount = Math.max(highestCount, counter[node.id]);

  if (node.child_node_ids.length === 0) {
    const totalNumber = Object.keys(counter).length;
    return { totalNumber, highestCount };
  }

  for (const childNodes in node.child_node_ids) {
    nodeCounter(childNodes, counter);
  }
};

const nodeOnNodes = (node) => {
  const finalCounter = nodeCounter(node, {}, 0);
  return finalCounter;
};
