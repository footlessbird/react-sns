import React from 'react'
import {Form, Button, Input} from 'antd'

const ProfileForm = () => {
  return (
    <div>
      <Form style={{marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}}>
        <Input addonBefore="nickname"/>
        <Button type="primary">Update</Button>
      </Form>
    </div>
  )
}

export default ProfileForm
