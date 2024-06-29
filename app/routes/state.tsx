import { useLocation } from "@remix-run/react";

export default function Index() {

	const location = useLocation();

	return (
		<div className="font-sans p-4">
			{location.state.message}
		</div>
	);
}
