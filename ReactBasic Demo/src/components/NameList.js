import React from 'react'
import Person from './Person' 

function NameList() {
    const names = ['Bruce','Clark','Diana','Bruce']
    // const persons= [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 31,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 32,
    //         skill: 'java'
    //     }
    // ]
    // const personsList = persons.map(person=><Person key={person.id} person={person} />)
    // return <div> {personsList} </div>




    //Index can be used as the key..............x
    const nameList =names.map((name,index) =><h2 key={index}>{index}.{name}</h2>)
    return <div> {nameList} </div>
}

export default NameList
