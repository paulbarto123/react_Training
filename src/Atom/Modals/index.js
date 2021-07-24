import React from 'react'
import Header from './Header';
import Body from './Body'
import Footer from './Footer'
export default function Modals(){
    return (
        <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
        </div>
    );
}