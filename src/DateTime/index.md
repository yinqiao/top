## DateTime

现在有一个 Date 类型的对象，如果让它前进一年？

```tsx
import React from 'react';

function DateTime() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  return <div>{date.getFullYear()}</div>;
}

export default DateTime;
```
