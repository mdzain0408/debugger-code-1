function isTouching(object,object2)
{

  if (object.x - object2.x < object2.width/2 + object.width/2
    && object2.x - object.x < object2.width/2 + object.width/2
    && object.y - object2.y < object2.height/2 + object.height/2
    && object2.y - object.y < object2.height/2 + object.height/2) {
    return true;
}
else {

  return false;
  
}
}