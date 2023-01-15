import React, { FC } from 'react';
import { IconProps } from '../types';

/* eslint-disable */
const UpOutlined: FC<IconProps> = ({ className, onClick }) => {
    return (
        <svg
            fill="currentColor"
            height="1em"
            width="1em"
            onClick={onClick}
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>UpOutlined</title>
            <path
                fill="currentColor"
                d="m21.354 16.94-.707.707a.5.5 0 0 1-.707 0l-7.586-7.585a.5.5 0 0 0-.707 0l-7.586 7.585a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l9-9a.5.5 0 0 1 .707 0l9 9a.5.5 0 0 1 0 .707Z"
            />
        </svg>
    );
};

export default UpOutlined;
