import React from 'react';

export const Success = ({ count }) => {
   return (
      <div class="success-block">
         <img src="/assets/success.svg" alt="Success" />
         <h3 style={{'color': '#ff7802'}}>Успешно!</h3>
         <p style={{'color': '#ff7802'}}>Всем {count} пользователям отправлено приглашение.</p>
         <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
      </div>
   );
};
