let Dkk = (Price) => {
  document.getElementById("total").innerHTML = Price;
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");

  if (Price === "195.00") {
    two.innerHTML = "";
    three.innerHTML = "";
    one.innerHTML = `<div class="dropdown1">
    <span style="padding: 0px 60px 0px 15px">Size</span>
    <span>Colour</span>
  </div>
  <div>
    <small>#1</small>
    <div style="display: inline" class="selectTag">
      <select style="width: 65.98px; height: 25.31px">
        <option>S</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
    <div style="display: inline" class="selectTag">
      <select style="width: 72.3px; height: 25.31px">
        <option>Colour</option>
      </select>
    </div>
  </div>`;
  } else if (Price === "345.00") {
    one.innerHTML = "";
    three.innerHTML = "";
    two.innerHTML = `<div class="dropdown1">
    <span style="padding: 0px 40px 0px 15px">Size</span>
    <span>Colour</span>
  </div>
  <div>
    <small>#1</small>
    <div style="display: inline" class="selectTag">
      <select style="width: 65.98px; height: 25.31px">
        <option>S</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
    <div style="display: inline" class="selectTag">
      <select style="width: 72.3px; height: 25.31px">
        <option>Colour</option>
      </select>
    </div>
  </div>
  <div>
    <small>#2</small>
    <div style="display: inline" class="selectTag">
      <select style="width: 65.98px; height: 25.31px">
        <option>S</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
    <div style="display: inline" class="selectTag">
      <select style="width: 72.3px; height: 25.31px">
        <option>Colour</option>
      </select>
    </div>
  </div>`;
  } else if (Price === "528.00") {
    one.innerHTML = "";
    two.innerHTML = "";
    three.innerHTML = `<div class="dropdown1">
    <span style="padding: 0px 60px 0px 15px">Size</span>
    <span>Colour</span>
  </div>
  <div>
    <small>#1</small>
    <div style="display: inline" class="selectTag">
      <select style="width: 65.98px; height: 25.31px">
        <option>S</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
    <div style="display: inline" class="selectTag">
      <select style="width: 72.3px; height: 25.31px">
        <option>Colour</option>
      </select>
    </div>
  </div>
  <div>
    <small>#2</small>
    <div style="display: inline" class="selectTag">
      <select style="width: 65.98px; height: 25.31px">
        <option>S</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
    <div style="display: inline" class="selectTag">
      <select style="width: 72.3px; height: 25.31px">
        <option>Colour</option>
      </select>
    </div>
  </div>
  <div>
    <small>#3</small>
    <div style="display: inline" class="selectTag">
      <select style="width: 65.98px; height: 25.31px">
        <option>S</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
    <div style="display: inline" class="selectTag">
      <select style="width: 72.3px; height: 25.31px">
        <option>Colour</option>
      </select>
    </div>
  </div>`;
  } else {
    one.innerHTML = "";
    two.innerHTML = "";
    three.innerHTML = "";
  }
};
