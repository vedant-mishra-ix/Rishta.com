using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Service
{
    public interface IChatsService
    {
        public Task<Chats> Chat(Chats userChats);
        public IEnumerable<Chats> Chats(int senderId, int recieverId);
        public IEnumerable<Chats> Chat(int senderId, int recieverId);
    }
    public class ChatsService:IChatsService
    {
        private readonly IChats _service;
        public ChatsService(IChats service)
        {
            _service = service;
        }

        public async Task<Chats> Chat(Chats userChats)
        {
            var AddChats = new Entity.Chats
            {
                Message = userChats.Message,
                SenderId = userChats.SenderId,
                RecieverId = userChats.RecieverId,
                SendDateTime = DateTime.Now,
                RecieveDateTime = DateTime.Now
            };
            await _service.Chat(AddChats);
            return new Chats { Id = AddChats.Id};
        }

        public IEnumerable<Chats> Chat(int senderId, int recieverId)
        {
            var Messages = _service.Chat(senderId, recieverId);
            return (from Msg in Messages
                    select new Chats
                    {
                        Id = Msg.SenderId,
                        Message = Msg.Message,
                        SendDateTime =Msg.SendDateTime,
                    }).ToList();
        }

        public IEnumerable<Chats> Chats(int senderId, int recieverId)
        {
            var Messages = _service.Chats(senderId,recieverId);
            return (from Msg in Messages
                    select new Chats
                    {
                      Id = Msg.SenderId,
                      Message = Msg.Message,
                      SendDateTime = Msg.SendDateTime,
                    }).ToList();
        }
    }
}
