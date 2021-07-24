import React from 'react'
export default class Header extends React.Component {
    render(){
        return (
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
        )
    }
}