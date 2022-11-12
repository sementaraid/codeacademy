import Layout from "../../components/layout";
import * as styles from "./home.module.scss";

const Home = () => {
	return (
		<Layout>
			<div className={styles.home}>
				<div className={styles.homeContent}>
					<main className={styles.maincontent}>
						<h1>My Home</h1>
						<div className={styles.homeWrapper}>
							<div className={styles.homeLeft}>
								<div className={styles.homeLeftContent}>
									<a href="/subscriptions/proAnnualV3_7trial/checkout?redirect_url=%2Flearn" data-testid="pro-trial-banner-notification">
										<div className={styles.captionBox}>
											<div className={styles.captionBoxContent}>
												<div className={styles.captionBoxTitle}>
													<div className={styles.captionBoxTitleLabel}>
														<svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pro" role="img"><rect width="30" height="16" fill="#10162f"></rect><path d="M5.81612 3.19989C6.81478 3.19989 7.57545 3.47522 8.09812 4.02589C8.62078 4.56722 8.88212 5.28589 8.88212 6.18189C8.88212 7.07789 8.62078 7.80122 8.09812 8.35189C7.57545 8.89322 6.81478 9.16389 5.81612 9.16389H3.94012V12.9999H2.12012V3.19989H5.81612ZM5.74612 7.48389C6.15678 7.48389 6.47412 7.37656 6.69812 7.16189C6.92212 6.94722 7.03412 6.62056 7.03412 6.18189C7.03412 5.74322 6.92212 5.41656 6.69812 5.20189C6.47412 4.98722 6.15678 4.87989 5.74612 4.87989H3.94012V7.48389H5.74612Z" fill="#ffffff"></path><path d="M14.0436 3.19989C14.9956 3.19989 15.7283 3.45656 16.2416 3.96989C16.7643 4.47389 17.0256 5.14589 17.0256 5.98589C17.0256 6.63922 16.867 7.19922 16.5496 7.66589C16.2323 8.12322 15.7796 8.44056 15.1916 8.61789L17.9076 12.9999H15.8776L13.2456 8.77189H12.2936V12.9999H10.4736V3.19989H14.0436ZM14.0576 7.09189C14.4123 7.09189 14.6923 7.00322 14.8976 6.82589C15.103 6.64856 15.2056 6.36856 15.2056 5.98589C15.2056 5.60322 15.103 5.32322 14.8976 5.14589C14.6923 4.96856 14.4123 4.87989 14.0576 4.87989H12.2936V7.09189H14.0576Z" fill="#ffffff"></path><path d="M22.7387 13.1119C21.8894 13.1119 21.1147 12.9252 20.4147 12.5519C19.7147 12.1786 19.1547 11.6186 18.7347 10.8719C18.3241 10.1159 18.1187 9.19189 18.1187 8.09989C18.1187 7.00789 18.3241 6.08856 18.7347 5.34189C19.1547 4.58589 19.7147 4.02122 20.4147 3.64789C21.1147 3.27456 21.8894 3.08789 22.7387 3.08789C23.5881 3.08789 24.3627 3.27456 25.0627 3.64789C25.7627 4.02122 26.3181 4.58589 26.7287 5.34189C27.1487 6.08856 27.3587 7.00789 27.3587 8.09989C27.3587 9.19189 27.1487 10.1159 26.7287 10.8719C26.3181 11.6186 25.7627 12.1786 25.0627 12.5519C24.3627 12.9252 23.5881 13.1119 22.7387 13.1119ZM22.7387 11.4319C23.2521 11.4319 23.7141 11.3152 24.1247 11.0819C24.5447 10.8392 24.8807 10.4706 25.1327 9.97589C25.3847 9.47189 25.5107 8.84656 25.5107 8.09989C25.5107 7.35322 25.3847 6.73256 25.1327 6.23789C24.8807 5.73389 24.5447 5.36522 24.1247 5.13189C23.7141 4.88922 23.2521 4.76789 22.7387 4.76789C22.2254 4.76789 21.7587 4.88922 21.3387 5.13189C20.9281 5.36522 20.5967 5.73389 20.3447 6.23789C20.0927 6.73256 19.9667 7.35322 19.9667 8.09989C19.9667 8.84656 20.0927 9.47189 20.3447 9.97589C20.5967 10.4706 20.9281 10.8392 21.3387 11.0819C21.7587 11.3152 22.2254 11.4319 22.7387 11.4319Z" fill="#ffffff"></path></svg>
													</div>
													<h2 className={styles.captionText}>Get more from Codecademy</h2>
												</div>
												<div className={styles.captionSubject}>
													<p className={styles.captionDescription}>Go deeper and learn job-ready skills with our Pro-exclusive Paths. Earn a certificate of completion for every Path finished.</p>
												</div>
											</div>
										</div>
									</a>
								</div>

								{/* My Courses */}
								<div className={styles.gridBoxes}>
									<div className={styles.flexBoxes} id="mycourses">
										<h2>My Courses</h2>
										<div className={styles.hiddenDesktop}>
											<div>
												<a href="/account/goals_settings">Set Goals</a>
											</div>
										</div>
									</div>
									<div>
										<div className={styles.myCoursesBox}>
											<svg fill="currentColor" role="img" aria-hidden="true">
												<title>Dot Loose</title>
												<pattern id="DotLoose-pattern-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
													<rect width="0.5" height="0.5" fill="currentColor"></rect>
													<rect y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
												</pattern>
												<rect width="100%" height="100%" fill="url(#DotLoose-pattern-1)"></rect>
											</svg>
											<div className={styles.myCoursesCaptions}>
												<svg aria-hidden="true" viewBox="0 0 101 138" fill="none" xmlns="http://www.w3.org/2000/svg">
													<title>Hills Illustration</title>
													<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="100" height="136">
														<path d="M2.18262 135.524C2.18262 134.12 2.24105 48.562 2.35466 47.184C3.3909 34.8717 8.96465 23.406 17.9667 15.0689C26.9687 6.73168 38.739 2.13423 50.9352 2.19145C63.1313 2.24866 74.8591 6.95634 83.7845 15.3776C92.71 23.7989 98.1787 35.3163 99.1024 47.6378C99.1932 48.8678 99.2387 134.275 99.2387 135.524H2.18262Z" fill="white" stroke="#10162F" strokeWidth="2" strokeMiterlimit="10"></path>
													</mask>
													<g mask="url(#mask0)">
														<path d="M121.861 288.57C182.183 288.57 231.084 239.385 231.084 178.713C231.084 118.042 182.183 68.8572 121.861 68.8572C89.5017 68.8572 60.4288 83.0113 40.4287 105.5" stroke="#10162F"></path>
														<path d="M75.2861 64.2294C90.7932 64.2294 103.364 51.4928 103.364 35.7813C103.364 20.0699 90.7932 7.33325 75.2861 7.33325C59.779 7.33325 47.208 20.0699 47.208 35.7813C47.208 51.4928 59.779 64.2294 75.2861 64.2294Z" stroke="#10162F" strokeMiterlimit="10"></path>
														<path d="M15.9787 206.634C45.2898 206.634 69.0512 182.56 69.0512 152.862C69.0512 123.165 45.2898 99.0907 15.9787 99.0907C-13.3324 99.0907 -37.0938 123.165 -37.0938 152.862C-37.0938 182.56 -13.3324 206.634 15.9787 206.634Z" stroke="#10162F" strokeMiterlimit="10"></path>
													</g>
													<path d="M1 136.714C1 135.285 1.05985 48.1991 1.17624 46.7965C2.23775 34.2643 7.94745 22.594 17.169 14.1079C26.3906 5.62185 38.448 0.942302 50.9416 1.00054C63.4352 1.05877 75.449 5.85052 84.5922 14.4222C93.7353 22.9938 99.3374 34.7169 100.284 47.2584C100.377 48.5104 100.423 135.442 100.423 136.714H1Z" stroke="#10162F" strokeMiterlimit="10"></path>
												</svg>
												<div className={styles.myCoursesCaptionsDescriptions}>
													<h3>You haven't enrolled in a course yet</h3>
													<span>Explore our course catalog to enroll in a course.</span>
													<a href="/catalog">Find a Course</a>
												</div>
											</div>
										</div>
									</div>
									<ul>

									</ul>
								</div>

								{/* My Workspaces */}
								<div className={styles.gridBoxes}>
									<div className={styles.flexBoxes} id="myworkspaces">
										<h2>My Workspaces</h2>
										<div className={styles.hiddenDesktop}>
											<div>
												<a href="/account/goals_settings">Set Goals</a>
											</div>
										</div>
									</div>
									<div>
										<div className={styles.myWorkspacesBox}>
											<svg fill="currentColor" role="img" aria-hidden="true">
												<title>Dot Loose</title>
												<pattern id="DotLoose-pattern-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
													<rect width="0.5" height="0.5" fill="currentColor"></rect>
													<rect y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
												</pattern>
												<rect width="100%" height="100%" fill="url(#DotLoose-pattern-1)"></rect>
											</svg>
											<div className={styles.myWorkspacesCaptions}>
												<svg aria-hidden="true" viewBox="0 0 174 121" fill="none" xmlns="http://www.w3.org/2000/svg">
													<title>Binary Blocks Icon</title>
													<path d="M3.5332 119.239L174 119.239" stroke="#10162F"></path>
													<path d="M0.5 79.9924H40.1294V119.622H0.5V79.9924Z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M39.3628 79.9924H78.9922V119.622H39.3628V79.9924Z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M39.3628 40.2462H78.9922V79.8756H39.3628V40.2462Z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M39.3628 0.5H78.9922V40.1294H39.3628V0.5Z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M79.1091 79.9924H118.739V119.622H79.1091V79.9924Z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M79.1091 40.2462H118.739V79.8756H79.1091V40.2462Z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M119.038 84.9749L153.358 65.1601L173.173 99.4802L138.853 119.295L119.038 84.9749Z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M41.0171 0.976593H78.1279V39.064H41.0171V0.976593Z" fill="url(#pattern0)"></path>
													<path d="M40.6296 81.2589H77.7261V119.239H40.6296V81.2589Z" fill="url(#pattern1)"></path>
													<path d="M120.178 85.1283L152.863 66.2572L172.233 99.8071L139.548 118.678L120.178 85.1283Z" fill="url(#pattern2)"></path>
													<rect x="52.1115" y="90.0914" width="14.132" height="21.198" fill="#FFF0E5"></rect>
													<rect x="52.1115" y="9.71582" width="14.132" height="21.198" fill="#FFF0E5"></rect>
													<path d="M99.2002 53.3768C98.4602 54.9568 97.2802 55.2168 94.8602 55.2768V56.5368H98.5602V66.2968H94.8602V67.8768H103.44V66.2968H100.4V53.3768H99.2002Z" fill="#10162F"></path>
													<rect x="134.771" y="87.1473" width="14.132" height="21.198" transform="rotate(-30 134.771 87.1473)" fill="#FFF0E5"></rect>
													<path d="M143.937 87.2624C144.086 89.0007 143.194 89.8158 141.128 91.0778L141.758 92.169L144.963 90.319L149.843 98.7714L146.638 100.621L147.428 101.99L154.859 97.6997L154.069 96.3314L151.436 97.8514L144.976 86.6624L143.937 87.2624Z" fill="#10162F"></path>
													<path d="M99.1002 108.177C102.76 108.177 104.18 105.097 104.18 100.597C104.18 96.0974 102.76 93.1574 99.1002 93.1574C95.4402 93.1574 94.0402 96.0974 94.0402 100.597C94.0402 105.097 95.4402 108.177 99.1002 108.177ZM95.9002 100.597C95.9002 96.6374 96.9202 94.7174 99.1002 94.7174C100.84 94.7174 101.86 95.9574 102.18 98.4774L95.9202 101.337C95.9002 101.097 95.9002 100.857 95.9002 100.597ZM99.1002 106.597C97.3802 106.597 96.3802 105.337 96.0402 102.857L102.3 99.9574C102.32 100.177 102.32 100.377 102.32 100.597C102.32 104.557 101.28 106.597 99.1002 106.597Z" fill="#10162F"></path>
													<path d="M59.0594 68.1368C62.7194 68.1368 64.1394 65.0568 64.1394 60.5568C64.1394 56.0568 62.7194 53.1168 59.0594 53.1168C55.3994 53.1168 53.9994 56.0568 53.9994 60.5568C53.9994 65.0568 55.3994 68.1368 59.0594 68.1368ZM55.8594 60.5568C55.8594 56.5968 56.8794 54.6768 59.0594 54.6768C60.7994 54.6768 61.8194 55.9168 62.1394 58.4368L55.8794 61.2968C55.8594 61.0568 55.8594 60.8168 55.8594 60.5568ZM59.0594 66.5568C57.3394 66.5568 56.3394 65.2968 55.9994 62.8168L62.2594 59.9168C62.2794 60.1368 62.2794 60.3368 62.2794 60.5568C62.2794 64.5168 61.2394 66.5568 59.0594 66.5568Z" fill="#10162F"></path>
													<path d="M19.9954 108.177C23.6554 108.177 25.0754 105.097 25.0754 100.597C25.0754 96.0974 23.6554 93.1574 19.9954 93.1574C16.3354 93.1574 14.9354 96.0974 14.9354 100.597C14.9354 105.097 16.3354 108.177 19.9954 108.177ZM16.7954 100.597C16.7954 96.6374 17.8154 94.7174 19.9954 94.7174C21.7354 94.7174 22.7554 95.9574 23.0754 98.4774L16.8154 101.337C16.7954 101.097 16.7954 100.857 16.7954 100.597ZM19.9954 106.597C18.2754 106.597 17.2754 105.337 16.9354 102.857L23.1954 99.9574C23.2154 100.177 23.2154 100.377 23.2154 100.597C23.2154 104.557 22.1754 106.597 19.9954 106.597Z" fill="#10162F"></path>
													<path d="M59.1594 93.4174C58.4194 94.9974 57.2394 95.2574 54.8194 95.3174V96.5774H58.5194V106.337H54.8194V107.917H63.3994V106.337H60.3594V93.4174H59.1594Z" fill="#10162F"></path><path d="M59.1594 13.3362C58.4194 14.9162 57.2394 15.1762 54.8194 15.2362V16.4962H58.5194V26.2562H54.8194V27.8362H63.3994V26.2562H60.3594V13.3362H59.1594Z" fill="#10162F"></path>
													<defs>
														<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.215571" height="0.210043">
															<use xlinkHref="#image0" transform="scale(0.0269463 0.0262554)"></use>
														</pattern>
														<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="0.215654" height="0.210639">
															<use xlinkHref="#image0" transform="scale(0.0269568 0.0263299)"></use>
														</pattern>
														<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="0.211965" height="0.206505">
															<use xlinkHref="#image0" transform="scale(0.0264956 0.0258131)"></use>
														</pattern>
														<image id="image0" width="8" height="8" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeSURBVHgBzc4xAQAAAAEwEVxq6J+OGCzBQDk4MzgV8D0CqU26KA8AAAAASUVORK5CYII="></image>
													</defs>
												</svg>
												<div className={styles.myWorkspacesCaptionsDescriptions}>
													<h3>Code on your own</h3>
													<span>Create your first workspace to experiment with what you're learning or build your own projects from scratch.</span>
													<div className={styles.flexBoxes}>
														<a href="/catalog">
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
																<title>Add Bold Icon</title>
																<path d="M0 12a1.5 1.5 0 001.5 1.5h8.75a.25.25 0 01.25.25v8.75a1.5 1.5 0 003 0v-8.75a.25.25 0 01.25-.25h8.75a1.5 1.5 0 000-3h-8.75a.25.25 0 01-.25-.25V1.5a1.5 1.5 0 00-3 0v8.75a.25.25 0 01-.25.25H1.5A1.5 1.5 0 000 12z"></path>
															</svg>
															<span>New Workspace</span>
														</a>
														<a href="/users/tag6798406948/workspaces">Workspaces home</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<ul>

									</ul>
								</div>

								{/* Recomendations */}
								<div className={styles.recomendations}>
									<div className={styles.homeLeftContent}>
										<a href="/subscriptions/proAnnualV3_7trial/checkout?redirect_url=%2Flearn" data-testid="pro-trial-banner-notification">
											<div className={styles.captionBox}>
												<div className={styles.captionBoxContent}>
													<div className={styles.captionBoxTitle}>
														<span style={{display:"flex"}}>
															<div className={styles.captionBoxTitleLabel}>
																<svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pro" role="img"><rect width="30" height="16" fill="#10162f"></rect><path d="M5.81612 3.19989C6.81478 3.19989 7.57545 3.47522 8.09812 4.02589C8.62078 4.56722 8.88212 5.28589 8.88212 6.18189C8.88212 7.07789 8.62078 7.80122 8.09812 8.35189C7.57545 8.89322 6.81478 9.16389 5.81612 9.16389H3.94012V12.9999H2.12012V3.19989H5.81612ZM5.74612 7.48389C6.15678 7.48389 6.47412 7.37656 6.69812 7.16189C6.92212 6.94722 7.03412 6.62056 7.03412 6.18189C7.03412 5.74322 6.92212 5.41656 6.69812 5.20189C6.47412 4.98722 6.15678 4.87989 5.74612 4.87989H3.94012V7.48389H5.74612Z" fill="#ffffff"></path><path d="M14.0436 3.19989C14.9956 3.19989 15.7283 3.45656 16.2416 3.96989C16.7643 4.47389 17.0256 5.14589 17.0256 5.98589C17.0256 6.63922 16.867 7.19922 16.5496 7.66589C16.2323 8.12322 15.7796 8.44056 15.1916 8.61789L17.9076 12.9999H15.8776L13.2456 8.77189H12.2936V12.9999H10.4736V3.19989H14.0436ZM14.0576 7.09189C14.4123 7.09189 14.6923 7.00322 14.8976 6.82589C15.103 6.64856 15.2056 6.36856 15.2056 5.98589C15.2056 5.60322 15.103 5.32322 14.8976 5.14589C14.6923 4.96856 14.4123 4.87989 14.0576 4.87989H12.2936V7.09189H14.0576Z" fill="#ffffff"></path><path d="M22.7387 13.1119C21.8894 13.1119 21.1147 12.9252 20.4147 12.5519C19.7147 12.1786 19.1547 11.6186 18.7347 10.8719C18.3241 10.1159 18.1187 9.19189 18.1187 8.09989C18.1187 7.00789 18.3241 6.08856 18.7347 5.34189C19.1547 4.58589 19.7147 4.02122 20.4147 3.64789C21.1147 3.27456 21.8894 3.08789 22.7387 3.08789C23.5881 3.08789 24.3627 3.27456 25.0627 3.64789C25.7627 4.02122 26.3181 4.58589 26.7287 5.34189C27.1487 6.08856 27.3587 7.00789 27.3587 8.09989C27.3587 9.19189 27.1487 10.1159 26.7287 10.8719C26.3181 11.6186 25.7627 12.1786 25.0627 12.5519C24.3627 12.9252 23.5881 13.1119 22.7387 13.1119ZM22.7387 11.4319C23.2521 11.4319 23.7141 11.3152 24.1247 11.0819C24.5447 10.8392 24.8807 10.4706 25.1327 9.97589C25.3847 9.47189 25.5107 8.84656 25.5107 8.09989C25.5107 7.35322 25.3847 6.73256 25.1327 6.23789C24.8807 5.73389 24.5447 5.36522 24.1247 5.13189C23.7141 4.88922 23.2521 4.76789 22.7387 4.76789C22.2254 4.76789 21.7587 4.88922 21.3387 5.13189C20.9281 5.36522 20.5967 5.73389 20.3447 6.23789C20.0927 6.73256 19.9667 7.35322 19.9667 8.09989C19.9667 8.84656 20.0927 9.47189 20.3447 9.97589C20.5967 10.4706 20.9281 10.8392 21.3387 11.0819C21.7587 11.3152 22.2254 11.4319 22.7387 11.4319Z" fill="#ffffff"></path></svg>
															</div>
															Skill Path
														</span>
													</div>
													<div className={styles.recomendationSubject}>
														<h3>Code Foundations</h3>
														<p className={styles.recomendationDescription}>Go deeper and learn job-ready skills with our Pro-exclusive Paths. Earn a certificate of completion for every Path finished.</p>
													</div>
												</div>
											</div>
										</a>
									</div>
									<div className={styles.homeLeftContent}>
										<a href="/subscriptions/proAnnualV3_7trial/checkout?redirect_url=%2Flearn" data-testid="pro-trial-banner-notification">
											<div className={styles.captionBox}>
												<div className={styles.captionBoxContent}>
													<div className={styles.captionBoxTitle}>
														<span style={{display:"flex"}}>
															Course
														</span>
													</div>
													<div className={styles.recomendationSubject}>
														<h3>Learn Javascript</h3>
														<p className={styles.recomendationDescription}>Go deeper and learn job-ready skills with our Pro-exclusive Paths. Earn a certificate of completion for every Path finished.</p>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className={styles.homeRight}>
								{/* My Goals */}
								<div className={styles.gridBoxes}>
									<div className={styles.flexBoxes} id="my-goals">
										<h2>My Goals</h2>
										<div className={styles.hiddenDesktop}>
											<div>
												<a href="/account/goals_settings">Set Goals</a>
											</div>
										</div>
									</div>
									<div>
										<div className={styles.myGoalsBox}>
											<svg fill="currentColor" role="img" aria-hidden="true">
												<title>Dot Loose</title>
												<pattern id="DotLoose-pattern-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
													<rect width="0.5" height="0.5" fill="currentColor"></rect>
													<rect y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="1" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" y="1" width="0.5" height="0.5" fill="currentColor"></rect>
													<rect x="0.5" y="0.5" width="0.5" height="0.5" fill="currentColor"></rect>
												</pattern>
												<rect width="100%" height="100%" fill="url(#DotLoose-pattern-1)"></rect>
											</svg>
											<div className={styles.myGoalsCaptions}>
												<svg aria-hidden="true" height="96" viewBox="0 0 135 97" fill="none" xmlns="http://www.w3.org/2000/svg">
													<title>Target</title>
													<path d="M6.93 24.844L48 1.133l41.07 23.711v47.423L48 95.978 6.93 72.267V24.844z" fill="#FFF0E5" stroke="#10162F" stroke-linejoin="round"></path>
													<path d="M24.537 35.009L48 21.462 71.463 35.01v27.093L48 75.65 24.537 62.102V35.01z" fill="#FFF0E5" stroke="#10162F" stroke-linejoin="round"></path>
													<path d="M40.11 44.891l7.325-4.229 7.325 4.23v8.457l-7.325 4.23-7.325-4.23v-8.458z" fill="#FFF0E5" stroke="#10162F" stroke-linejoin="round"></path>
													<path fill-rule="evenodd" clip-rule="evenodd" d="M56.792 37.243l5.09 14.758-11.902-4.163 6.812-10.595z" fill="#FFF0E5" stroke="#10162F"></path>
													<path d="M59.88 44.511l71.705-24.657M125.648 21.64l3.24-6.64M121.289 23.09l3.24-6.639M116.931 24.541l3.24-6.639M125.76 21.778l6.648 3.24M121.402 23.591l6.647 3.24M117.043 25.042l6.648 3.24" stroke="#10162F" stroke-linecap="square"></path>
												</svg>
												<div className={styles.myGoalsCaptionsDescriptions}>
													<h3>No goals set yet</h3>
													<span>Increase your chance of success by 43%!</span>
													<div className={styles.flexBoxes}>
														<a href="/users/tag6798406948/workspaces">Set Goals</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</Layout>
	)
}

export default Home;