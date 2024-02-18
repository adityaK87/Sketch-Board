import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "../../contants";
import { SketchPicker } from "react-color";
import cx from "classnames";

import { changeColor, changeBrushSize } from "../../slices/toolboxSlice";

const Toolbox = () => {
	const dispatch = useDispatch();

	const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

	const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
	const showBrushToolOption =
		activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

	const { color, size } = useSelector(
		(state) => state.toolbox[activeMenuItem]
	);

	const updateBrushSize = (e) => {
		dispatch(
			changeBrushSize({ item: activeMenuItem, size: e.target.value })
		);
	};

	const handleChangeComplete = (color) => {
		dispatch(changeColor({ item: activeMenuItem, color: color.hex }));
		console.log(color);
	};

	return (
		<div className={styles.toolboxContainer}>
			{showStrokeToolOption && (
				<div className={styles.toolItem}>
					<h4 className={styles.toolText}>Stroke Color</h4>
					<SketchPicker
						color={color}
						onChange={handleChangeComplete}
						disableAlpha={true}
					/>

					{/* <div className={styles.itemContainer}>
						<div
							className={cx(styles.colorBox, {
								[styles.active]: color === COLORS.BLACK,
							})}
							onClick={() => {
								updateColor(COLORS.BLACK);
							}}
							style={{ backgroundColor: COLORS.BLACK }}
						/>
						<div
							className={cx(styles.colorBox, {
								[styles.active]: color === COLORS.RED,
							})}
							onClick={() => {
								updateColor(COLORS.RED);
							}}
							style={{ backgroundColor: COLORS.RED }}
						/>
						<div
							className={cx(styles.colorBox, {
								[styles.active]: color === COLORS.BLUE,
							})}
							onClick={() => {
								updateColor(COLORS.BLUE);
							}}
							style={{ backgroundColor: COLORS.BLUE }}
						/>
						<div
							className={cx(styles.colorBox, {
								[styles.active]: color === COLORS.GREEN,
							})}
							onClick={() => {
								updateColor(COLORS.GREEN);
							}}
							style={{ backgroundColor: COLORS.GREEN }}
						/>
						<div
							className={cx(styles.colorBox, {
								[styles.active]: color === COLORS.ORANGE,
							})}
							onClick={() => {
								updateColor(COLORS.ORANGE);
							}}
							style={{ backgroundColor: COLORS.ORANGE }}
						/>
						<div
							className={cx(styles.colorBox, {
								[styles.active]: color === COLORS.YELLOW,
							})}
							onClick={() => {
								updateColor(COLORS.YELLOW);
							}}
							style={{ backgroundColor: COLORS.YELLOW }}
						/>
					</div> */}
				</div>
			)}
			{showBrushToolOption && (
				<div className={styles.toolItem}>
					<h4 className={styles.toolText}>Brush Size</h4>
					<div className={styles.itemContainer}>
						<input
							type="range"
							min={1}
							max={10}
							step={1}
							onChange={updateBrushSize}
							value={size}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Toolbox;
