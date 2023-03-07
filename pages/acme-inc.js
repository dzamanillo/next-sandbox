export default function Acme() {
	return (
		<>
			<div id="form">
				<iframe
					class="clickup-embed clickup-dynamic-height"
					src="https://forms.clickup.com/9010044376/f/8cgmqer-1500/X74O07PG4Z6H6BVK66"
					onwheel=""
					width="100%"
					height="100%"
					style={{ background: "transparent", border: "1px solid #ccc" }}
				></iframe>
				<script
					async
					src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
				></script>
			</div>
			<div id="board">
				<iframe
					class="clickup-embed"
					src="https://sharing.clickup.com/9010044376/b/h/8cgmqer-1480/0ddc0aca67f10f5"
					onwheel=""
					width="100%"
					height="700px"
					style={{ background: "transparent", border: "1px solid #ccc" }}
				></iframe>
			</div>
		</>
	);
}
