import styled from 'styled-components';
import 'components/Contribute/Tooltip.scss';

const Button = styled.button`
    margin-left: 20px;
    background-color: black;
    color: white;
    border: 2px solid #0fa0b6;
    padding: 0.2em;
    white-space: nowrap;
    width: min-content;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    z-index: 0;
    vertical-align: middle;
    cursor: pointer;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        line-height: 0;
        isolation: isolate;
        padding-right: 2px;
    }
    p {
        text-decoration: underline;
    }
`;

const Contribute = () => {
    return (
        <Button
            className="tooltip-button"
            data-tooltip="Click to share your knowledge!"
            onMouseOver={() => console.log('hi')}
        >
            <svg
                width="496.304px"
                height="496.303px"
                viewBox="0 0 496.304 496.303"
                fill="white"
            >
                <g>
                    <path
                        d="M248.146,0C111.314,0,0,111.321,0,248.152c0,136.829,111.314,248.151,248.146,248.151
							c136.835,0,248.158-111.322,248.158-248.151C496.304,111.321,384.98,0,248.146,0z M248.146,472.093
							c-123.473,0-223.935-100.459-223.935-223.941c0-123.479,100.462-223.941,223.935-223.941
							c123.488,0,223.947,100.462,223.947,223.941C472.093,371.634,371.634,472.093,248.146,472.093z M319.536,383.42v32.852
							c0,1.383-1.123,2.494-2.482,2.494H196.45c-1.374,0-2.482-1.117-2.482-2.494V383.42c0-1.372,1.114-2.482,2.482-2.482h34.744V205.831
							h-35.101c-1.375,0-2.468-1.111-2.468-2.474v-33.6c0-1.38,1.1-2.479,2.468-2.479h82.293c1.371,0,2.482,1.105,2.482,2.479v211.181
							h36.186C318.413,380.938,319.536,382.048,319.536,383.42z M209.93,105.927c0-20.895,16.929-37.829,37.829-37.829
							c20.886,0,37.826,16.935,37.826,37.829s-16.94,37.829-37.826,37.829C226.853,143.756,209.93,126.822,209.93,105.927z"
                    />
                </g>
            </svg>
            <p>Don't see a particular food item?</p>
        </Button>
    );
};

export default Contribute;
