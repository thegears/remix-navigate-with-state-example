import { useNavigate } from "@remix-run/react";

export default function Index() {

	const navigate = useNavigate()

	return (
		<div className="font-sans p-4">
			<button onClick={() => navigate("/state", {
				state: {
					"message": "Hello World"
				}
			})}>Navigate with state that has a message ( state.message = Hello World )</button>

			<input
				style={{ width: "100%" }}
				type="text"
				placeholder="Navigate with state that has a message ( state.message = Your message )"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						navigate("/state", {
							state: {
								"message": e.currentTarget.value
							}
						})
					}
				}}
			/>

		</div>
	);
}
