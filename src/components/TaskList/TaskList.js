import { Tabs, TabLink, Tab, TabContent } from 'components/Tabs';
import { Button } from 'components/Button';

import { days, contents } from './constants';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { contents };
  }

  render() {
    const current = new Date().getDay();
    const { contents } = this.state;

    return (
      <Tabs selected={current}>
        {days.map(day => (
          <Tab key={day}>
            <TabLink title={day} />
            <TabContent>
              <ol className="contentList">
                {contents[day].map(content => (
                  <li key={content.id}>
                    <p>{ content.task }</p>
                    <div>
                      <Button btnClass="btn-done" btnText="v" />
                      <Button btnClass="btn-delete" btnText="x" />
                      <Button btnClass="btn-process" btnText="~" />
                    </div>
                  </li>
                ))}
              </ol>
              <Button btnClass="btn btn-info" btnText="add new task" />
            </TabContent>
          </Tab>
        ))}
      </Tabs>
    );
  }
}
