using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class Pagination
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public Pagination()
        {
            this.PageNumber = 1;
            this.PageSize = 3;
        }
        public Pagination(int pageNumber, int pageSize)
        {
            this.PageNumber = pageNumber < 1 ? 1 : pageNumber;
            this.PageSize = pageSize > 3 ? 3 : pageSize;
        }
    }
}
