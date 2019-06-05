import React from "react";
import {Button, List, Icon, Card} from 'antd'
import ProfileForm from '../components/ProfileForm'
const Profile = () => {
  return (
    // <div>
    //   <ProfileForm />
    //   <List style={{marginBottom: '20px'}}
    //         grid={{gutter: 4, xs: 2, md: 3}}
    //         size="small"
    //         header={<div>Following List</div>}
    //         loadMore={<Button style={{width: '100%'}}>Load More</Button>}
    //         bordered
    //         dataSource={['arcadeKid', 'The Underdog story', 'footlessbird']}
    //         renderItem={item=>(
    //           <List.Item style={{marginTop: '20px'}}>
    //             <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card> 
    //           </List.Item>
    //         )}
    //   />
    //   <List style={{marginBottom: '20px'}}
    //         grid={{gutter: 4, xs: 2, md: 3}}
    //         size="small"
    //         header={<div>Follower List</div>}
    //         loadMore={<Button style={{width: '100%'}}>Load More</Button>}
    //         bordered
    //         dataSource={['arcadeKid', 'The Underdog story', 'footlessbird']}
    //         renderItem={item=>(
    //           <List.Item style={{marginTop: '20px'}}>
    //             <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card> 
    //           </List.Item>
    //         )}
    //   />

    // </div>

    <div>
      <ProfileForm />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Following List</div>}
        loadMore={<Button style={{ width: '100%' }}>Load More</Button>}
        bordered
        dataSource={['arcadeKid', 'The Underdog Story', 'footlessbird']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Follower List</div>}
        loadMore={<Button style={{ width: '100%' }}>Load More</Button>}
        bordered
        dataSource={['arcadeKid', 'The Underdog Story', 'footlessbird']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
    </div>

  );
};

export default Profile;
