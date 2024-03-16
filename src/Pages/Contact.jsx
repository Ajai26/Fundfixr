import React from 'react'

const Contact = () => {
  return (
    <div id='contact' class="container card9">
  <form className='flex items-center justify-center'>
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia">Jammu & Kashmir</option>
          <option value="canada">Maharashtra</option>
          <option value="usa">Gujartat</option>
          <option value="usa">Telangaqna</option>
          <option value="usa">Haryana</option>
          <option value="usa">Punjab</option>
          <option value="usa">nagaland</option>
          <option value="usa">Asssam</option>
          <option value="usa">West Bengal</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>

  )
}

export default Contact