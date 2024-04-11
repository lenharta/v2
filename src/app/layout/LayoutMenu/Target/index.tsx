// import clsx from 'clsx';
// import { Action } from '@/app/action';
// import { Factory } from '@/types';
// import { factory } from '@/core/factory';
// import { useAppDispatch, useAppState } from '@/store';

// const css = {
//   grid: 'layout-menu-target-grid',
//   cell: 'layout-menu-target-cell',
//   row: 'layout-menu-target-row',
// };

// interface LayoutMenuTargetProps {}

// type LayoutMenuTargetFactory = Factory.Config<{
//   ref: HTMLButtonElement;
//   comp: 'button';
//   props: LayoutMenuTargetProps;
//   comps: {
//     Cell: React.FC<{ uid: string }>;
//     Row: React.FC<{ uid: string; children?: React.ReactNode | undefined }>;
//   };
// }>;

// const data = [
//   { row: 'r-x', cells: ['c-x', 'c-y', 'c-z'] },
//   { row: 'r-y', cells: ['c-x', 'c-y', 'c-z'] },
//   { row: 'r-z', cells: ['c-x', 'c-y', 'c-z'] },
// ];

// const createCellProps = (row: string, cell: string) => ({
//   key: [row, cell].join('-'),
//   uid: [row, cell].join('-'),
// });

// export const LayoutMenuTarget = factory<LayoutMenuTargetFactory>((props, ref) => {
//   const { ...otherProps } = props;
//   const dispatch = useAppDispatch();
//   const state = useAppState();

//   const a11yProps = {
//     tabIndex: 0,
//     'aria-label': 'menu button',
//     'aria-pressed': state.isMenuOpen,
//     'aria-haspopup': 'menu',
//   };

//   return (
//     <div className="layout-menu">
//       <Action
//         {...otherProps}
//         {...a11yProps}
//         ref={ref}
//         label="menu button"
//         aria-haspopup="menu"
//         aria-pressed={state.isMenuOpen}
//         onClick={(event) => {
//           event.stopPropagation();
//           dispatch({ isMenuOpen: !state.isMenuOpen ? true : undefined });
//         }}
//       >
//         <div className={css.grid}>
//           {data.map(({ row, cells }) => (
//             <LayoutMenuTarget.Row uid={row} key={row}>
//               {cells.map((cell) => (
//                 <LayoutMenuTarget.Cell {...createCellProps(row, cell)} />
//               ))}
//             </LayoutMenuTarget.Row>
//           ))}
//         </div>
//       </Action>
//     </div>
//   );
// });

// LayoutMenuTarget.Row = ({ uid, ...otherProps }) => (
//   <div {...otherProps} className={clsx(css.row, [css.row, uid].join('-'))} />
// );

// LayoutMenuTarget.Cell = ({ uid, ...otherProps }) => (
//   <div {...otherProps} className={clsx(css.cell, [css.cell, uid].join('-'))} />
// );
