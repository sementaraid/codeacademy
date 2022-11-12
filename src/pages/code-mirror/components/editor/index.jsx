import CodeMirror from '@uiw/react-codemirror';
import  { useCallback } from 'react'
import * as styles from "./editor.module.scss";
import { javascript } from '@codemirror/lang-javascript';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { GoFileDirectory } from "react-icons/go"
import { AiOutlineClose,AiOutlineReload } from "react-icons/ai"
import { FiCopy } from "react-icons/fi"

const Editor = () => {
	const handleChange = useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

	return(
		<div className={styles.editor}>
			<div className={styles.editorHeader}>
        <div className={styles.editorFileIcon}>
          <GoFileDirectory/>
        </div>
				<div className={styles.editorFileName}>
					index.js
          <AiOutlineClose/>
				</div>
			</div>
      <div className={styles.editorContent}>
        <CodeMirror
          onChange={handleChange}
          height={"calc(100vh - 60px)"}
          extensions={[javascript({ jsx: true })]}
          theme={sublime}
        />
      </div>
      <div className={styles.editorAction}>
        <button type="button">Run</button>
        <button type="button"><FiCopy/></button>
        <button type="button"><AiOutlineReload/></button>
      </div>
		</div>
	);
}

export default Editor;