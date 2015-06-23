function calc()
{
	var x = document.getElementById("input1").value;
	var y = document.getElementById("input2").value;

	var _x = "";
	var _y = "";

	for (var i = 0; i < x.length; i++)
	{
		if ("1234567890".indexOf(x.substr(i, 1)) !== -1)
		{
			_x += x.substr(i, 1);
		}
	}

	for (var i = 0; i < y.length; i++)
	{
		if ("1234567890".indexOf(y.substr(i, 1)) !== -1)
		{
			_y += y.substr(i, 1);
		}
	}

	x = _x.toString().split("").map(function(item) { return parseInt(item); });
	y = _y.toString().split("").map(function(item) { return parseInt(item); });

	if (x.length > y.length)
	{
		var l = x.length - y.length;
		for (var i = 0; i < l; i++)
		{
			y.unshift(0);
		}
	}

	if (y.length > x.length)
	{
		var l = y.length - x.length;
		for (var i = 0; i < l; i++)
		{
			x.unshift(0);
		}
	}

	var carry = 0;
	var res = [];

	for (var i = 0; i < x.length; i++)
	{
		var digitsum = x[x.length - 1 - i] + y[y.length - 1 - i];
		digitsum += carry;
		res.unshift(parseInt(digitsum.toString().substr(digitsum.toString().length - 1)));

		carry = parseInt(digitsum / 10);
	}

	res.unshift(carry);

	while (res.length > 1 && res[0] === 0)
	{
		res.splice(0, 1);
	}

	document.getElementById("output").value = res.join("");
}