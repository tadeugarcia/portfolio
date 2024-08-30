export default function ReenrollmentPage() {
	return (
    <main>
		<div className="nav-start">
			<a href="/">
				<span className="material-symbols-outlined">arrow_left_alt</span> All work
			</a>
		</div>

		<div className="video-intro">
			<video loop muted>
				<source src="video.mp4" type="video/mp4"/>
				Your browser does not support the video tag.
			</video>
		</div>

		<main id="content"></main>
		<h2>Thank you for your time</h2>
		<p>Let's return to view  <a href="/">all work <span className="material-symbols-outlined">arrow_right_alt</span></a></p>
    </main>
  );
}