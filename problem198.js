/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    console.log(nums);

    // I will be moving forward with my solution going through the loop, I know that if there only one house then the max money is from that one house, if there are only two houses then I can choose the bigger of the two.

// We know that there should never be 3 houses untouched in a row, so that makes our limit 2 untouched houses in a row, with this I can be comfortable checking the past two houses in a row. I can check whether the house max that was two houses down plus the current house is more than the max for the house before the current house (since I need a seperation of at least one house, I will not be adding anything.)

    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);


    let maxTwoHousesBefore = nums[0];
    let maxOneHouseBefore = Math.max(nums[0], nums[1]);
    let currentMax;
    for (let i = 2; i < nums.length; i++) {
        currentMax = Math.max(nums[i] + maxTwoHousesBefore, maxOneHouseBefore);
        maxTwoHousesBefore = maxOneHouseBefore; // This works because the max that this algorithm can go is two houses, because the maxTwoHousesBefore = the maxOneHouseBefore this means that they can both be the same number, and if they're both the same number by the third house then there will be a new max number because num[i] + maxTwoHousesBefore will always be bigger than maxOneHouseBefore since there is no addition being applied to maxOneHouseBefore
        maxOneHouseBefore = currentMax;
    }
    return currentMax;
};