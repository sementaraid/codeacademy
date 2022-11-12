import * as styles from "./checkout.module.scss";
import Switch from "react-js-switch";

const Checkout = () => {
	return (
		<div id={styles.checkoutContainer}>
			<div className={styles.checkout}>
				<div className={styles.checkoutLogo}>
					<a href="/" role="menuitem">
						<svg height="32" viewBox="0 0 285 60" xmlns="http://www.w3.org/2000/svg">
							<title>Codecademy Logo</title>
							<g fill="currentColor" fillRule="evenodd">
								<path d="M11.778 41.177C11.24 39.624 11 37.652 11 35.024c0-2.63.24-4.6.778-6.154C13.213 24.45 16.98 22 21.945 22c3.708 0 6.58 1.494 8.553 3.883a.49.49 0 0 1-.06.717l-3.23 2.868c-.24.18-.538.18-.717-.12-1.255-1.374-2.51-2.15-4.544-2.15-2.212 0-3.887 1.075-4.605 3.226-.36 1.254-.48 2.688-.48 4.6 0 1.91.12 3.405.54 4.66.72 2.09 2.393 3.226 4.606 3.226 2.033 0 3.35-.777 4.546-2.15.18-.24.48-.24.718-.06l3.23 2.867c.24.18.18.478.06.717-1.974 2.33-4.845 3.823-8.553 3.823-4.964-.06-8.792-2.45-10.227-6.93m110.998 0c-.538-1.553-.778-3.525-.778-6.153 0-2.63.24-4.6.778-6.154 1.435-4.42 5.203-6.87 10.167-6.87 3.708 0 6.64 1.494 8.553 3.883a.49.49 0 0 1-.06.717l-3.23 2.868c-.24.18-.538.18-.717-.12-1.255-1.374-2.51-2.15-4.544-2.15-2.212 0-3.887 1.075-4.605 3.226-.417 1.254-.54 2.688-.54 4.6 0 1.91.123 3.405.54 4.66.72 2.09 2.394 3.226 4.606 3.226 2.033 0 3.35-.777 4.546-2.15.18-.24.48-.24.718-.06l3.23 2.867c.24.18.18.478.06.717-1.974 2.33-4.845 3.823-8.553 3.823-4.964-.06-8.732-2.45-10.167-6.93m130.14 6.273c-.298 0-.537-.18-.537-.538V32.574c0-3.226-1.615-5.436-4.665-5.436-2.99 0-4.725 2.21-4.725 5.436v14.338c0 .3-.18.538-.538.538h-4.725c-.3 0-.538-.18-.538-.538V32.574c0-3.226-1.615-5.436-4.666-5.436-2.99 0-4.725 2.21-4.725 5.436v14.338c0 .3-.177.538-.536.538h-4.725c-.3 0-.54-.18-.54-.538V23.075c0-.298.18-.537.54-.537h4.724c.3 0 .538.18.538.537v1.793h.06c1.078-1.553 3.23-2.868 6.52-2.868 2.93 0 5.264 1.195 6.76 3.286h.06c1.912-2.09 4.365-3.286 7.893-3.286 5.742 0 8.972 3.943 8.972 9.26v15.712c0 .3-.18.538-.54.538l-4.604-.06zm11.82 8.782c-.3 0-.54-.18-.54-.538v-4.122c0-.3.18-.537.54-.537h.897c1.974 0 2.93-.897 3.708-2.928l.718-2.09-9.032-23.48c-.117-.298.12-.537.42-.537h5.085c.3 0 .538.18.598.538l5.562 16.25h.12l5.323-16.25c.12-.3.3-.538.597-.538h4.845c.298 0 .538.18.418.538l-9.33 25.987c-2.153 5.914-4.187 7.767-8.313 7.767l-1.615-.06zM49.67 39.622c.42-1.313.538-2.51.538-4.6s-.12-3.225-.538-4.6c-.718-2.09-2.333-3.225-4.605-3.225-2.273 0-3.947 1.195-4.665 3.226-.42 1.314-.54 2.45-.54 4.6 0 2.09.12 3.286.54 4.6.718 2.09 2.333 3.227 4.665 3.227 2.272.06 3.887-1.136 4.605-3.227m-14.832 1.553C34.3 39.444 34 37.772 34 35.023c0-2.748.24-4.36.838-6.153C36.213 24.51 39.98 22 45.005 22c4.964 0 8.732 2.51 10.107 6.87.54 1.732.838 3.405.838 6.153 0 2.75-.24 4.36-.838 6.153-1.375 4.36-5.143 6.87-10.107 6.87-4.964 0-8.732-2.51-10.167-6.87M155.288 22c-4.068 0-6.76.956-8.733 2.45-.18.18-.24.418-.12.656l1.914 3.406c.177.238.477.298.715.12 1.197-.956 2.87-1.733 5.622-1.733 4.008 0 5.384 1.192 5.503 3.88v8.305c0 2.867-1.973 4.24-5.502 4.24-2.75 0-4.245-1.014-4.245-3.105 0-2.33 1.614-3.345 5.322-3.345h1.137c.298 0 .538-.18.538-.537v-3.286c0-.298-.18-.538-.538-.538h-2.034c-6.1 0-9.868 2.51-9.868 7.886 0 5.197 3.768 7.588 8.313 7.588 3.47 0 5.8-1.195 6.938-2.868h.06v1.792c0 .3.18.538.54.538h4.306c.3 0 .54-.18.54-.538v-16.19C165.572 24.63 162.82 22 155.286 22M94.732 32.514c-.12 0-.24.06-.24.24v3.883c0 .12.06.24.24.24h12.68c.358 0 .538-.18.538-.538 0-4.004-.24-5.736-.838-7.47-1.376-4.24-5.084-6.87-10.168-6.87-4.904 0-8.73 2.51-10.107 6.87C86.3 30.485 86 32.455 86 35.025c0 2.568.36 4.48.897 6.093 1.376 4.36 5.084 6.93 10.287 6.93 4.545 0 8.014-1.733 10.167-4.24.18-.24.18-.54-.06-.718l-2.99-2.69c-.237-.18-.536-.18-.775.12-1.256 1.373-2.99 2.39-5.802 2.39-2.75 0-4.725-1.316-5.502-3.765-.12-.36-.24-.717-.3-1.076a20.057 20.057 0 0 1-.297-3.585c.06-1.434.12-2.33.3-3.465v-.12c.06-.297.118-.536.178-.775.66-2.032 2.513-3.226 4.845-3.226 2.333 0 4.128 1.192 4.785 3.224a7.01 7.01 0 0 1 .298 2.09c0 .18-.12.3-.3.3h-6.995zM81.232 12h-4.725c-.3 0-.538.18-.538.538v23.478c-.06 1.434-.24 2.39-.48 3.226-.66 2.09-2.273 3.167-4.606 3.167-2.273 0-3.888-1.138-4.545-3.17-.36-1.134-.54-2.39-.54-4.66s.18-3.524.54-4.66c.656-2.03 2.21-3.165 4.425-3.225H72.8c.118 0 .178-.12.178-.238v-4.72c0-.12-.06-.18-.18-.24H69.27c-4.126.06-7.117 2.032-8.373 5.975-.598 1.912-.897 3.644-.897 6.99 0 3.345.24 5.078.897 6.99 1.256 4.002 4.366 5.974 8.553 5.974 3.35 0 5.382-1.255 6.52-2.928h.06v1.85c0 .3.178.54.537.54h4.725c.3 0 .538-.18.538-.54V12.3c-.06-.12-.3-.298-.598-.298m123.5 20.512c-.12 0-.24.06-.24.24v3.883c0 .12.06.24.24.24h12.68c.358 0 .538-.18.538-.538 0-4.004-.24-5.736-.838-7.47-1.376-4.24-5.084-6.87-10.168-6.87-4.904 0-8.73 2.51-10.107 6.87-.538 1.615-.837 3.585-.837 6.155 0 2.568.36 4.48.897 6.093 1.376 4.36 5.084 6.93 10.287 6.93 4.545 0 8.014-1.733 10.167-4.24.18-.24.18-.54-.06-.718l-2.987-2.69c-.24-.18-.54-.18-.778.12-1.256 1.374-2.99 2.39-5.802 2.39-2.75 0-4.725-1.315-5.502-3.764-.12-.36-.24-.717-.3-1.076a20.045 20.045 0 0 1-.297-3.584c.06-1.434.12-2.33.3-3.465v-.12c.06-.296.118-.535.178-.774.66-2.032 2.513-3.226 4.845-3.226 2.333 0 4.128 1.193 4.785 3.225a7.01 7.01 0 0 1 .298 2.09c0 .18-.12.3-.3.3h-6.995zM191.232 12h-4.725c-.3 0-.538.18-.538.538v23.538c-.06 1.433-.24 2.39-.48 3.226-.66 2.09-2.273 3.226-4.606 3.226-2.333 0-3.888-1.136-4.545-3.226-.36-1.135-.54-2.39-.54-4.66s.18-3.525.54-4.66c.656-2.03 2.21-3.167 4.425-3.226h2.033c.298 0 .537-.18.537-.538v-4.122c0-.3-.18-.538-.538-.538h-3.47c-4.127.06-7.177 2.032-8.433 5.974-.598 1.912-.897 3.645-.897 7.05 0 3.346.24 5.138.897 7.05 1.256 4.002 4.366 5.974 8.553 5.974 3.35 0 5.382-1.255 6.58-2.927h.058v1.85c0 .3.18.537.538.537h4.725c.3 0 .54-.18.54-.538V12.477c-.12-.3-.36-.478-.658-.478M123 55v4c0 .752.175 1 1 1h16c.767 0 1-.186 1-1v-4c0-.752-.175-1-1-1h-17c.175 0 0 .186 0 1"></path><path d="M6.99 54H6c.12-.06 0-.238 0 0V6c0 .238.12.06 0 0h107c-.12.06 0 .238 0 0v47c0 .703-.12.88 0 1H6.99zM119 0c-.12.18-.12.12 0 0-.12.12-.12.12 0 0-.24.06-.36 0-1 0H0c.12.12 0 .3 0 1v59c0-.3.06-.18 0 0h118c.64 0 .76-.06 1 0-.06-.24 0-.36 0-1V0z"></path>
							</g>
						</svg>
					</a>
				</div>
				<div className={styles.checkoutMessage}>
					<h1>Checkout</h1>
					<div className={styles.checkoutMessageContent}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true">
							<title>Mini Info Circle Icon</title>
							<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm7.5 105a7.5 7.5 0 01-15 0V70a7.5 7.5 0 0115 0zM70 50a10 10 0 1110-10 10 10 0 01-10 10z"></path>
						</svg>
						<span>
							Start your 
							<span>&nbsp;7-day free trial&nbsp;</span> 
							today. We'll email you a reminder 3 days before your trial ends.
						</span>
					</div>
				</div>
				<form className={styles.checkoutForm}>
					<div className={styles.checkoutGrid}>
						<div className={styles.checkoutFormContainer}>
							<svg fill="currentColor" role="img" aria-hidden="true">
								<title>Checker Dense</title>
								<pattern id="CheckerDense-pattern-1" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
									<rect width="1" height="1" fill="currentColor"></rect>
									<rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
								</pattern>
								<rect width="100%" height="100%" fill="url(#CheckerDense-pattern-1)"></rect>
							</svg>
							<div className={styles.checkoutCard}>
								<div className={styles.checkoutCardHeader}>
									<h4>Plan and Billing</h4>
								</div>
								<div className={styles.checkoutCardBody}>
									<div className={styles.checkoutSwitchContainer}>
										<div className={styles.checkoutSwitch}>
											<Switch/>
											<label>
												<span>Save by paying annually</span>
												<span>SAVE $42</span>
											</label>
										</div>
										<div className={styles.checkoutSwitchCompare}>
											<a type="button">Compare Plans</a>
										</div>
									</div>
									<div className={styles.checkoutPlanning}>
										<div className={styles.planningBox}>
											<input type={"radio"} name="planning" value="1" id={styles.planning1}/>
											<label className={styles.planningCard} htmlFor={styles.planning1}>
												<div className={styles.planningCardHeader}>
													<div className={styles.plannTitle}>
														<label>
															<span>
																<span/>
															</span>
															Pro Lite
														</label>
														<span>Learn a skill</span>
													</div>
												</div>
												<div className={styles.planningCardBody}>
													<svg fill="currentColor" role="img" aria-hidden="true">
														<title>Diagonal A Regular</title>
														<pattern id="DiagonalARegular-pattern-2" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
															<rect width="1" height="1" fill="currentColor"></rect>
															<rect x="6" y="2" width="1" height="1" fill="currentColor"></rect>
															<rect x="5" y="2" width="1" height="1" fill="currentColor"></rect>
															<rect x="5" y="3" width="1" height="1" fill="currentColor"></rect>
															<rect x="4" y="3" width="1" height="1" fill="currentColor"></rect>
															<rect x="7" width="1" height="1" fill="currentColor"></rect>
															<rect x="7" y="1" width="1" height="1" fill="currentColor"></rect>
															<rect x="6" y="1" width="1" height="1" fill="currentColor"></rect>
															<rect x="3" y="5" width="1" height="1" fill="currentColor"></rect>
															<rect x="2" y="5" width="1" height="1" fill="currentColor"></rect>
															<rect x="2" y="6" width="1" height="1" fill="currentColor"></rect>
															<rect x="1" y="6" width="1" height="1" fill="currentColor"></rect>
															<rect y="7" width="1" height="1" fill="currentColor"></rect>
															<rect x="1" y="7" width="1" height="1" fill="currentColor"></rect>
															<rect x="4" y="4" width="1" height="1" fill="currentColor"></rect>
															<rect x="3" y="4" width="1" height="1" fill="currentColor"></rect>
														</pattern>
														<rect width="100%" height="100%" fill="url(#DiagonalARegular-pattern-2)"></rect>
													</svg>

													<div className={styles.planningPrice}>
														<div className={styles.planningPriceBackground}>
															<svg fill="currentColor" role="img" aria-hidden="true">
																<title>Diagonal A Dense</title>
																<pattern id="DiagonalADense-pattern-2" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
																	<rect width="1" height="1" fill="currentColor"></rect>
																	<rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
																	<rect x="1" y="2" width="1" height="1" fill="currentColor"></rect>
																	<rect x="1" y="3" width="1" height="1" fill="currentColor"></rect>
																	<rect y="3" width="1" height="1" fill="currentColor"></rect>
																	<rect x="3" width="1" height="1" fill="currentColor"></rect>
																	<rect x="3" y="1" width="1" height="1" fill="currentColor"></rect>
																	<rect x="2" y="1" width="1" height="1" fill="currentColor"></rect>
																</pattern>
																<rect width="100%" height="100%" fill="url(#DiagonalADense-pattern-2)"></rect>
															</svg>
														</div>
														<div className={styles.planningPriceBox}>
															<div data-testid="pricing-amount" className={styles.planningAmount}>
																<span data-testid="pricing-amount-label">$13.99 a month, billed annually</span>
																<div aria-hidden="true">
																	<div>
																		<span>$</span>
																		<span>13</span>
																		<div>
																			<span>.99</span>
																			<span>/mo</span>
																		</div>
																	</div>
																</div>
																<span>
																	<span aria-hidden="true" className="gamut-zvrr5o-Text e8i0p5k0">Billed annually</span>
																	<br/>
																</span>
															</div>
														</div>
													</div>
												</div>

												<div className={styles.checkoutCardBody}>
														<div className={styles.planningCasesBox}>
																<ul>
																	<li>
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																	<li className="gamut-pabwoe-FlexBox e1nq9uth5">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																	<li className="gamut-pabwoe-FlexBox e1nq9uth5">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																	<li className="gamut-pabwoe-FlexBox e1nq9uth5">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																</ul>
														</div>
													</div>
											</label>
										</div>
										<div className={styles.planningBox}>
											<input type={"radio"} name="planning" value="2" id={styles.planning2}/>
											<label className={styles.planningCard} htmlFor={styles.planning2}>
												<div className={styles.planningCardHeader}>
													<div className={styles.plannTitle}>
														<label>
															<span>
																<span/>
															</span>
															Pro
														</label>
														<span>Build Career</span>
													</div>
												</div>
												<div className={styles.planningCardBody}>
													<svg>
														<title>Diagonal A Regular</title>
														<pattern id="DiagonalARegular-pattern-1" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
															<rect width="1" height="1" fill="currentColor"></rect>
<rect x="6" y="2" width="1" height="1" fill="currentColor"></rect>
															<rect x="5" y="2" width="1" height="1" fill="currentColor"></rect>
															<rect x="5" y="3" width="1" height="1" fill="currentColor"></rect>
															<rect x="4" y="3" width="1" height="1" fill="currentColor"></rect>
															<rect x="7" width="1" height="1" fill="currentColor"></rect>
															<rect x="7" y="1" width="1" height="1" fill="currentColor"></rect>
															<rect x="6" y="1" width="1" height="1" fill="currentColor"></rect>
															<rect x="3" y="5" width="1" height="1" fill="currentColor"></rect>
															<rect x="2" y="5" width="1" height="1" fill="currentColor"></rect>
															<rect x="2" y="6" width="1" height="1" fill="currentColor"></rect>
															<rect x="1" y="6" width="1" height="1" fill="currentColor"></rect>
															<rect y="7" width="1" height="1" fill="currentColor"></rect>
															<rect x="1" y="7" width="1" height="1" fill="currentColor"></rect>
															<rect x="4" y="4" width="1" height="1" fill="currentColor"></rect>
															<rect x="3" y="4" width="1" height="1" fill="currentColor"></rect>
														</pattern>
														<rect width="100%" height="100%" fill="url(#DiagonalARegular-pattern-1)"></rect>
													</svg>

													<div className={styles.planningPrice}>
														<div className={styles.planningPriceBackground}>
															<svg fill="currentColor" role="img" aria-hidden="true" className="gamut-uwwqev e3tf18d0">
																<title>Diagonal A Dense</title>
																<pattern id="DiagonalADense-pattern-1" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
																	<rect width="1" height="1" fill="currentColor"></rect>
																	<rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
																	<rect x="1" y="2" width="1" height="1" fill="currentColor"></rect>
																	<rect x="1" y="3" width="1" height="1" fill="currentColor"></rect>
																	<rect y="3" width="1" height="1" fill="currentColor"></rect>
																	<rect x="3" width="1" height="1" fill="currentColor"></rect>
																	<rect x="3" y="1" width="1" height="1" fill="currentColor"></rect>
																	<rect x="2" y="1" width="1" height="1" fill="currentColor"></rect>
																</pattern>
																<rect width="100%" height="100%" fill="url(#DiagonalADense-pattern-1)"></rect>
															</svg>
														</div>
														<div className={styles.planningPriceBox}>
															<div data-testid="pricing-amount" className={styles.planningAmount}>
																<span data-testid="pricing-amount-label">$13.99 a month, billed annually</span>
																<div aria-hidden="true">
																	<div>
																		<span>$</span>
																		<span>19</span>
																		<div>
																			<span>.99</span>
																			<span>/mo</span>
																		</div>
																	</div>
																</div>
																<span>
																	<span aria-hidden="true" className="gamut-zvrr5o-Text e8i0p5k0">Billed annually</span>
																	<br/>
																</span>
															</div>
														</div>
													</div>
												</div>

												<div className={styles.checkoutCardBody}>
														<div className={styles.planningCasesBox}>
																<ul className="gamut-ikm7fl-ListEl e3sih593">
																	<li className="gamut-pabwoe-FlexBox e1nq9uth5">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																	<li className="gamut-pabwoe-FlexBox e1nq9uth5">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																	<li className="gamut-pabwoe-FlexBox e1nq9uth5">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																	<li className="gamut-pabwoe-FlexBox e1nq9uth5">
																		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="currentColor" role="img" aria-hidden="true" className="gamut-1tef58t eol2zvm0">
																			<title>Mini Check Circle Icon</title>
																			<path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm36 59L66.24 98.74a10 10 0 01-14.15 0L34 80.68a10.013 10.013 0 0114.18-14.14l11 11 32.64-32.67A10.01 10.01 0 01106 59z"></path>
																		</svg>
																		<span className="gamut-xz9pfx-HiddenText e88fw8k0">Included: </span>
																		<span className="gamut-1131uxx-Text e8i0p5k0">Real-world projects</span>
																	</li>
																</ul>
														</div>
													</div>
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.checkoutCard}>
								<div className={styles.checkoutCardHeader}>
									<h4>Payment Method</h4>
								</div>
								<div className={styles.checkoutCardBody}>
									<div className={styles.paymentWrapper}>
										<div className={styles.paymentCardType}>
											<div className={styles.paymentCardContainer}>
												<input id="card" name="paymentMethod" type="radio" value="credit_card" checked=""/>
												<label for="card">Credit/debit card</label>
											</div>
											<div className={styles.paymentCardContainer}>
												<input id="paypal" name="paymentMethod" type="radio" value="paypal"/>
												<label for="paypal">PayPal</label>
											</div>
										</div>
										<div className={styles.paymentDetails}>
											<div className={styles.formRow}>
												<label>Card Number *</label>
												<input type={"text"} placeholder="Card Number" />
											</div>
										</div>
										<div className={styles.paymentDetails}>
											<div className={styles.formColumn}>
												<label>Firstname *</label>
												<input type={"text"} placeholder="First Name" />
											</div>
											<div className={styles.formColumn}>
												<label>Lastname *</label>
												<input type={"text"} placeholder="Last Name" />
											</div>
										</div>
										<div className={styles.paymentDetails}>
											<div className={styles.formColumn}>
												<label>Country *</label>
												<input type={"text"} placeholder="Country" />
											</div>
											<div className={styles.formColumn}>
												<label>Postal Code *</label>
												<input type={"text"} placeholder="Postal Code" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.checkoutSummaryContainer}>
							<svg fill="currentColor" role="img" aria-hidden="true" className="gamut-1rqw978 e3tf18d0">
								<title>Checker Dense</title>
								<pattern id="CheckerDense-pattern-2" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
									<rect width="1" height="1" fill="currentColor"></rect><rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
								</pattern><rect width="100%" height="100%" fill="url(#CheckerDense-pattern-2)"></rect>
							</svg>
							<div className={styles.checkoutCard}>
								<div className={styles.checkoutCardHeader}>
									<h4>Summary</h4>
								</div>
								<div className={styles.checkoutCardBody}>
									<p>Pro</p>
									<p>
										<span>Annual <span>Save $60</span></span>
										<span>
											<span>$24.99 $19.99 × 12 months</span>
											<span>$239.88/year</span>
										</span>
									</p>
									<p>
										<span>Tax</span>
										<span>$0.00</span>
									</p>
									<svg fill="currentColor" role="img" aria-hidden="true" className="e184xqe80 gamut-1e1efis e3tf18d0">
										<title>Checker Dense</title>
										<pattern id="CheckerDense-pattern-3" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
											<rect width="1" height="1" fill="currentColor"></rect>
											<rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
										</pattern>
										<rect width="100%" height="100%" fill="url(#CheckerDense-pattern-3)"></rect>
									</svg>
									<p>
										<span>Today's total</span>
										<span>$0</span>
									</p>
									<p>
										<span>Total <span>charged November 19</span></span>
										<span>$239.88</span>
									</p>
									<small>
										This is a recurring subscription. Your 7-day free trial will start today. After your first payment on November 19, 2022, your subscription will renew annually starting on November 19, 2023. You may cancel at any time in your payment settings.
										By confirming and starting the trial, you agree to our Terms of Service and authorize this recurring charge.
									</small>
									<button>Start 7-day free trial</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Checkout;