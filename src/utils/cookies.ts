const cookies = new Map();

function setCookie(cname, cvalue, exdays) {
	cvalue !== "" ?? cookies.set(cname, cvalue);

	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	const cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

	document.cookie = cookie;
}

function getCookie(cname: string): string {
	if (cookies.has(cname)) return cookies.get(cname);

	const name = cname + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

export { getCookie, setCookie };
