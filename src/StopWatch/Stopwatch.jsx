import React from 'react'
import './styles.css'

let timeInterval 
class Stopwatch extends React.Component{
    state={
        hours: 0,
        mintues: 0,
        seconds:0,
    }

    handleTime=()=>{
        const {seconds,mintues,hours} = this.state
        if(seconds === 59 ){
            if(mintues!==59){
                this.setState({
                    mintues : mintues + 1,
                    seconds: 0,
                })
            }else{
                this.setState({
                    hours: hours+ 1,
                    seconds: 0,
                    mintues: 0,
                })
            }
           
        }
        else{
            this.setState({
                seconds : seconds + 1
            })
        }
    
    }
    handleReset=()=>{
        this.handleStop()
        this.setState({
            seconds: 0,
            mintues: 0,
            hours:0,
        })
    }
    handleStop=()=>{
        clearInterval(timeInterval)
    }
    handleStart=()=>{
        timeInterval =  setInterval(this.handleTime,1000)
    }
    render(){
        const {hours,mintues,seconds} = this.state
        return(
            <div className='watch-container'>
                <p className='watch-header'>stop watch</p>
                <div className='watch-wrapper'> 
                    {`${hours} : ${mintues} : ${seconds}  `}
                </div>
                <div className='button-wrapper'>
                    <button onClick={this.handleStart}>Start</button>
                    <button onClick={this.handleStop}>Stop</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Stopwatch
export {Stopwatch}