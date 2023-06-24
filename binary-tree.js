/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    minDepthNode() {
        let depthCount = 0;
        const toVisitStack = [this];
        if (!this.val && !this.left && !this.right) return depthCount;
        depthCount = depthCount + 1;
        while (toVisitStack.length) {
            const current = toVisitStack.pop();
            if (!current.left || !current.right) {
                return depthCount;
            }
            if (!current.left.left || !current.left.right) {
                return depthCount + 1;
            }
            if (!current.right.left || !current.right.right) {
                return depthCount + 1;
            }
            toVisitStack.push(current.left);
        }
        return depthCount;
    }

    maxDepthNode() {
        let depthCount = 0;
        const toVisitStack = [this];
        depthCount = depthCount + 1;
        while (toVisitStack.length) {
            const current = toVisitStack.pop();
            if (current.left || current.right) depthCount = depthCount + 1;
            if (!current.left && !current.right) {
                return depthCount;
            }
            if (current.left) {
                if (current.left.left || current.left.right) {
                    toVisitStack.push(current.left);
                } else {
                    toVisitStack.push(current.right);
                }
            } else {
                toVisitStack.push(current.right);
            }
        }
        return depthCount;
    }

    maxSumNode() {
        let maxSum = 0;
        const toVisitStack = [this];
        maxSum = maxSum + this.val;
        while (toVisitStack.length) {
            const current = toVisitStack.pop();
            if (!current.left.val && !current.right.val) {
                return maxSum;
            }
            maxSum = maxSum + current.left.val + current.right.val;
            if (!current.left) {
                toVisitStack.push(current.right);
            } else if (!current.right) {
                toVisitStack.push(current.left);
            } else {
                let leftSum = 0;
                let rightSum = 0;
                if (current.left.left)
                    leftSum = leftSum + current.left.left.val;
                if (current.left.right)
                    leftSum = leftSum + current.left.right.val;
                if (current.right.left)
                    rightSum = rightSum + current.right.left.val;
                if (current.right.right)
                    rightSum = rightSum + current.right.right.val;
                if (leftSum > rightSum) toVisitStack.push(current.left);
                if (rightSum > leftSum) toVisitStack.push(current.right);
            }
        }
        return maxSum;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */

    minDepth() {
        if (this.root === null) return 0;
        return this.root.minDepthNode();
    }

    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */

    maxDepth() {
        if (this.root === null) return 0;
        return this.root.maxDepthNode();
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */

    maxSum() {
        if (this.root === null) return 0;
        return this.root.maxSumNode();
    }

    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */

    nextLarger(lowerBound) {}

    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */

    areCousins(node1, node2) {}

    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */

    static serialize() {}

    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

    static deserialize() {}

    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */

    lowestCommonAncestor(node1, node2) {}
}

// let firstLevel = new BinaryTreeNode("one");
// let secondLvlOne = new BinaryTreeNode("two");
// let secondLvlTwo = new BinaryTreeNode("three");
// let thirdLvlOne = new BinaryTreeNode("four");
// let thirdLvlTwo = new BinaryTreeNode("five");
// let thirdLvlThree = new BinaryTreeNode("six");
// let thirdLvlFour = new BinaryTreeNode("seven");
// let fourthLevel = new BinaryTreeNode("eight");

// firstLevel.left = secondLvlOne;
// firstLevel.right = secondLvlTwo;
// secondLvlOne.left = thirdLvlOne;
// secondLvlOne.right = thirdLvlTwo;
// secondLvlTwo.left = thirdLvlThree;
// secondLvlTwo.right = thirdLvlFour;
// thirdLvlOne.left = fourthLevel;

// let tree = new BinaryTree(firstLevel);

let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
let largeTree = new BinaryTree(root);

largeTree.maxSum();

module.exports = { BinaryTree, BinaryTreeNode };
