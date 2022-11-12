import * as styles from "./iframe.module.scss";
import { AiOutlineReload } from "react-icons/ai"
import { BsChevronLeft } from "react-icons/bs";

const IFrame = () => {
	return(
		<div className={styles.iframe}>
			<div className={styles.iframeHeader}>
				<div className={styles.iframeRouteIcon}>
					<BsChevronLeft/>
				</div>
				<div className={styles.iframeRouteIcon}>
					<AiOutlineReload/>
				</div>
				<div className={styles.iframeAddress}>
					http://localhost:3000
				</div>
			</div>
			<iframe/>
		</div>
	);
}

export default IFrame;