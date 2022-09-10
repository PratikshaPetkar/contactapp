import { render, screen } from '@testing-library/react';
import {render as renderer, unmountComponentAtNode  } from "react-dom";
import Header from './Header';


describe("Testing Header component",()=>{
    let element;
    beforeEach(()=>{
        element=document.createElement("div")
        document.body.appendChild(element)
    })

    afterEach(()=>{
        unmountComponentAtNode(element)
        element.remove()
        element=null
    })

    test("Demo test case for header",()=>{
        console.log("test case passed");
    })

    test("Should have Contact manager text in header",()=>{
        render(<Header/>)
        expect(screen.getByText("Contact Manager")).toBeInTheDocument()
    })

    test("Should have 4 anchor elements in a Header component",()=>{
        // let element;
        // element=document.createElement("div")
        // document.body.appendChild(element)
        renderer(<Header/>,element)
        // render(<Header/>)
        const count=element.getElementsByTagName("a").length
        expect(count).toBe(4)

    })

    it("Should have navbar-brand class in navbar barnd link",()=>{
        render(<Header/>)
        expect(screen.getByTestId("brandname")).toHaveClass("navbar-brand")
    })

    test("Hyperlinks should have nav-link class",()=>{
        renderer(<Header/>,element)
        const links=element.getElementsByTagName("a")
        for (let index = 1; index < links.length; index++) {
           expect(links[index]).toHaveClass("nav-link")
            
        }
    })




})