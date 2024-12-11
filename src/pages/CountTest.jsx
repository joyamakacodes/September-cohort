/* eslint-disable react/prop-types */
import { connect } from "react-redux"

const CountTest=({count})=>{
    return(
        <div>{count}</div>
    )
}

const mapStateToProps = state => (
   
        {
            count: state.counts.count
        }
    
)

export default connect  (mapStateToProps)(CountTest)