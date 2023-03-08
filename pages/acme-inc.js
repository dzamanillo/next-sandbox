export default function Acme() {
	return (
		<div>
			<div id="board">
				<iframe
					className="clickup-embed"
					src="https://sharing.clickup.com/9010044376/b/h/8cgmqer-1480/0ddc0aca67f10f5"
					onWheel=""
					width="100%"
					height="700px"
					style={{
						background: "transparent",
						border: "1px solid #ccc",
					}}
				></iframe>
			</div>
			<div>
				<h2 style={{ padding: "1rem", textAlign: "center" }}>
					Ticket Documentation
				</h2>
				<div
					style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
				>
					<div>
						<h3>Ticket Type</h3>
						<ul>
							<li>Bug - Something isn't working properly</li>
							<li>Design - Make update to current design</li>
							<li>
								New Feature - Request feature which will lead to discovery
							</li>
						</ul>
					</div>
					<div>
						<h3>Priority</h3>
						<ul>
							<li>Urgent - Blah Blah</li>
							<li>High - Blah Blah</li>
							<li>Normal - Blah Blah</li>
							<li>Low - Blah Blah</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="form">
				<iframe
					className="clickup-embed clickup-dynamic-height"
					src="https://forms.clickup.com/9010044376/f/8cgmqer-1500/X74O07PG4Z6H6BVK66"
					onWheel=""
					width="100%"
					height="100%"
					style={{
						background: "transparent",
						border: "none",
					}}
				></iframe>
				<script
					async
					src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
				></script>
			</div>
		</div>
	);
}
