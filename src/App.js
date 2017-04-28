import './App.css';
import React, { PropTypes } from 'react'
const { func }=PropTypes

class Calc extends React.Component {
	state={
		value: '',
		dot: false,
	}
	static propTypes ={
		toggleStakeKeypad: func,
		setSinglesStake: func,
	}

	pressButton(key) {
		const { value, dot }=this.state
		switch (key) {
			case 'C':
				this.setState({ value: '' })
				break;
			case 'OK':
				break;
			case '.':
				!dot && value.length && this.setState({ dot: true, value: value + key })
				break;
			default:
				this.setState({ value: value + key })
				break;
		}
	}

	render() {
		const { value }=this.state
		const values=[
			[{ value: '7' }, { value: '8' }, { value: '9' }, { value: 'C', className: 'C', rowSpan: '2' }],
			[{ value: '4' }, { value: '5' }, { value: '6' }],
			[{ value: '1' }, { value: '2' }, { value: '3' }, { value: 'OK', className: 'OK', rowSpan: '2' }],
			[{ value: '0', colSpan: '2' }, { value: '.' }]]
		return (
			<div className='calcContainer'>
				<div className='modalBack'>
					<div className='calcBody'>
						<div className='display'>
							<input autoFocus type='number' min={0} value={value.length ? value : 0} className='content' onChange={(e) => this.setState({ value: e.target.value })}/>
						</div>
						<div className='buttons'>
							<table className='table'>
								{values.map((inArr, key) => <tr key={key}>
									{inArr.map((obj, inKey) => <td
										onClick={() => this.pressButton(obj.value)}
										className={obj.className}
										colSpan={obj.colSpan}
										rowSpan={obj.rowSpan}
										key={inKey}> {obj.value}</td>)}
								</tr>)}
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Calc;
