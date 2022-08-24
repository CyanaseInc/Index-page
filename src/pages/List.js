import React from 'react';

const List = (props) => {
return (
	<div>
	<div> {props.qn}</div>
	<div>{props.ans}</div>
	</div>
);
};

export default List;
