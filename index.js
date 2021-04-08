function distanceFromHqInBlocks(blocks){
    return blocks > 42 ? blocks - 42 : 42 - blocks;
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    return block1 > block2 ? (block1 - block2) * 264 : (block2 - block1) * 264;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
}  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
}  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
}  else if (distanceTravelledInFeet(start, destination) > 2500) {
    return 'cannot travel that far';
}
}