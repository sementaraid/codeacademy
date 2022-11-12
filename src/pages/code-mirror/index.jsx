import * as styles from "./codemirror.module.scss";
import classNames from "classnames";
import Questions from "./components/questions";
import Editor from "./components/editor";
import IFrame from "./components/iframe";

const CodeMirror = () => {
	return (
		<div className={styles.codeMirror}>
			<div className={classNames(styles.items, styles.directionsWrapper)}>
				<Questions/>
			</div>
			<div className={classNames(styles.items, styles.codeEditor)}>
				<Editor/>
			</div>
			<div className={classNames(styles.items, styles.result)}>
				<IFrame/>
			</div>
		</div>
	);
}

export default CodeMirror;