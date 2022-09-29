
using Microsoft.Extensions.Options;
using RishtaAPI.Model;
using System;
using System.Net;
using System.Net.Mail;

namespace RishtaAPI.Service
{
    public interface IMailService
    {
        bool SendEmailAsync(ResetPassword mailRequest,string newPassword);
    }
    public class MailService: IMailService
    {
        private readonly MailSettings _mailSettings;
        public MailService(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }

        public bool SendEmailAsync(ResetPassword mailRequest,string newPassword)
        {
            try
            {
                MailMessage email = new MailMessage();
                email.From = new MailAddress(_mailSettings.Mail);
                email.Sender = new MailAddress(_mailSettings.Mail);
                email.To.Add(new MailAddress(mailRequest.UserEmail));
                email.Subject = "Your Request Is Granted Successfully";
                email.IsBodyHtml = true;
                email.Body = "You new password is generated successfully";
                email.Body = "New Password:  " + newPassword;
                using var smtp = new SmtpClient();
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Host = _mailSettings.Host;
                smtp.Port = _mailSettings.Port;     
                smtp.Credentials = new NetworkCredential(_mailSettings.Mail, _mailSettings.Password);
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(email);
                return true ;
            }
            catch(Exception ex)
            {
                throw;
               
            }
            
        }
    }
}
