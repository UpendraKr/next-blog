import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, phone, email, desc)

    // call api to post data
    const data = { 
      name: name,
      phone: phone,
      email: email,
      desc: desc
     };

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert("Thanks for contacting us!")
        setName("")
        setPhone("")
        setEmail("")
        setDesc("")
      })
      .catch((error) => {
        // console.error('Error:', error);
        alert("Error: " + error)
      });
  }

  const handleChange = (event) => {
    if (event.target.name == 'name') {
      setName(event.target.value)
    }
    else if (event.target.name == 'phone') {
      setPhone(event.target.value)
    }
    else if (event.target.name == 'email') {
      setEmail(event.target.value)
    }
    else if (event.target.name == 'desc') {
      setDesc(event.target.value)
    }


  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb} >
          <label htmlFor="name" className={styles.label}>Email your name </label>
          <input type="text" value={name} onChange={handleChange} id="name" name="name" />
        </div>
        <div className={styles.mb} >
          <label htmlFor="phone" className={styles.label}>Email your phone no </label>
          <input type="text" value={phone} onChange={handleChange} id="phone" name="phone" />
        </div>
        <div className={styles.mb}>
          <label htmlFor="email" className={styles.label}>Email your Email </label>
          <input type="text" value={email} onChange={handleChange} id="email" name="email" />
          <div id="emailHelp" >We'll never share your email with anyone else.</div>
        </div>

        <div className={styles.mb} >
          <label htmlFor="desc" className={styles.label}>Write your concern here </label>
          <textarea type="text" value={desc} onChange={handleChange} id="desc" name="desc" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default contact;