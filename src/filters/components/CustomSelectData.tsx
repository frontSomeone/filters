// import { useState, useRef, useEffect } from "react"
// import Styles from './index.module.css';
// import type { MouseEventHandler } from "react";


import category from "../dataOptions/category.json";
import { useState, FC, useEffect } from "react"
import { useClearApplyData } from "../ClearApplyData";

interface SelectOption {
    title: string;
  }

interface CustomSelectProps {
  options?: SelectOption[];
  placeholder?: string;
}


export const CustomSelectData: FC<CustomSelectProps> = ({ options, placeholder }) => {
  const { selected, setSelected } = useClearApplyData();
  // const [selected, setSelected] = useState<SelectOption | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // console.log(selected);
  // let data: SelectOption = [selected?.title];

  const showOptions = () => {
    setIsOpen(prev => !prev);
  }
  const selectOption = (option: SelectOption) => {
    setSelected(option);
    setIsOpen(false);
  }
  
  const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
    if (isOpen && !target.closest('.custom-select')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return(
    <div className="custom-select" style={styles.selectContainer}>
      <div className="customSel" style={styles.selectBox} onClick={showOptions}>
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <div style={styles.optionsContainer}>{options?.map((option, id) => (
          <div style={styles.option} key={id} onClick={() => selectOption(option)}>{option.title}</div>
        ))}</div>
      )}
    </div>
  )
}

// import React, { useState, useEffect, FC } from 'react';

// interface SelectOption {
//   title: string;
//   value: number;
// }

// interface CustomSelectProps {
//   options: SelectOption[];
//   placeholder?: string;
// }

// const CustomSelect: FC<CustomSelectProps> = ({ options, placeholder }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);
  
//   const toggleDropdown = () => {
//     setIsOpen(prev => !prev);
//   };

//   const selectOption = (option: SelectOption) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     const target = event.target as HTMLElement;
//     if (isOpen && !target.closest('.custom-select')) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <div className="custom-select" style={styles.selectContainer}>
//       <div onClick={toggleDropdown} style={styles.selectBox}>
//         {selectedOption ? selectedOption.title : placeholder || 'Select...'}
//         <span style={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
//       </div>
//       {isOpen && (
//         <div style={styles.optionsContainer}>
//           {options.map((option, id) => (
//             <div
//               key={id}
//               onClick={() => selectOption(option)}
//               style={styles.option}
//             >
//               {option.title}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default CustomSelect;

const styles: { [key: string]: React.CSSProperties } = {
  selectContainer: {
    position: 'relative',
    width: '200px',
    fontFamily: 'Arial, sans-serif',
  },
  selectBox: {
    border: '1px solid #ccc',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  option: {
    padding: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};





// type Option = {
//   title: string;
//   value: string;
// };
// type OptionProps = {
//   option: Option;
//   onClick: (value: Option["value"]) => void;
// };
// const OptionEl = (props: OptionProps) => {
//   const {
//     option: { value, title },
//     onClick
//   } = props;
//   const optionRef = useRef<HTMLLIElement>(null);

//   const handleClick = (
//     clickedValue: Option["value"]
//   ): MouseEventHandler<HTMLLIElement> => () => {
//     onClick(clickedValue);
//   };

//   useEffect(() => {
//     const option = optionRef.current;
//     if (!option) return;
//     const handleEnterKeyDown = (event: KeyboardEvent) => {
//       if (document.activeElement === option && event.key === "Enter") {
//         onClick(value);
//       }
//     };

//     option.addEventListener("keydown", handleEnterKeyDown);
//     return () => {
//       option.removeEventListener("keydown", handleEnterKeyDown);
//     };
//   }, [value, onClick]);

//   return (
//     <li
//       className={Styles.option}
//       value={value}
//       onClick={handleClick(value)}
//       tabIndex={0}
//       data-testid={`select-option-${value}`}
//       ref={optionRef}
//     >
//       {title}
//     </li>
//   );
// };

// type SelectProps = {
//   selected: string;
//   options: Option[];
//   placeholder?: string;
//   mode?: "rows" | "cells";
//   status?: "default" | "invalid";
//   onChange?: (selected: string) => void;
//   onClose?: () => void;
// };

// const Select = (props: SelectProps) => {
//   const {
//     mode = "rows",
//     options,
//     placeholder,
//     status = "default",
//     selected,
//     onChange,
//     onClose
//   } = props;
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const rootRef = useRef<HTMLDivElement>(null);
//   const placeholderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClick = (event: MouseEvent) => {
//       const { target } = event;
//       if (target instanceof Node && !rootRef.current?.contains(target)) {
//         isOpen && onClose?.();
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("click", handleClick);
//     };
//   }, [onClose]);

//   useEffect(() => {
//     const placeholderEl = placeholderRef.current;
//     if (!placeholderEl) return;

//     const handleEnterKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Enter") {
//         setIsOpen((prev) => !prev);
//       }
//     };
//     placeholderEl.addEventListener("keydown", handleEnterKeyDown);

//     return () => {
//       placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
//     };
//   }, []);

//   const handleOptionClick = (value: Option["value"]) => {
//     setIsOpen(false);
//     onChange?.(value);
//   };
//   const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div
//       className={Styles.selectWrapper}
//       ref={rootRef}
//       data-is-active={isOpen}
//       data-mode={mode}
//       data-testid="selectWrapper"
//     >
//       <div className={Styles.arrow}>
//         <img src="../images/arrow_down.svg" />
//       </div>
//       <div
//         className={Styles.placeholder}
//         data-status={status}
//         // data-selected={!!selected?.value}
//         onClick={handlePlaceHolderClick}
//         role="button"
//         tabIndex={0}
//         ref={placeholderRef}
//       >
//         {selected || placeholder}
//       </div>
//       {isOpen && (
//         <ul className={Styles.select} data-testid="selectDropdown">
//           {options.map((option) => (
//             <OptionEl
//               key={option.value}
//               option={option}
//               onClick={handleOptionClick}
//             />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Select;