using RishtaAPI.Data;
using RishtaAPI.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.DAL
{
    public interface IChats
    {
        public Task<Chats> Chat(Chats userChats);
        public IEnumerable<Chats> Chats(int senderId, int recieverId);
        public IEnumerable<Chats> Chat(int senderId, int recieverId);
    }
    public class ChatsDA:IChats
    {
        private readonly CoreDbContext _context;
        public ChatsDA(CoreDbContext context)
        {
            _context = context;
        }

        public async Task<Chats> Chat(Chats userChats)
        {
            var AddChats = await _context.Chats.AddAsync(userChats);
            _context.SaveChanges();
            return AddChats.Entity;
        }

        public IEnumerable<Chats> Chat(int senderId, int recieverId)
        {
               var Store = _context.Chats.Where(obj => obj.SenderId == recieverId && obj.RecieverId == senderId).ToList();
            if(Store.Count != 0)
            {
                return Store;
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<Chats> Chats(int senderId, int recieverId)
        {
            var Store = _context.Chats.Where(obj => obj.SenderId == senderId && obj.RecieverId == recieverId).ToList();
            if(Store.Count != 0)
            {
                return Store;
            }
            else
            {
                return null;
            }

        }
    }
}
