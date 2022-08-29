﻿using Newtonsoft.Json.Converters;
using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace RishtaAPI.Controllers.Converters
{
    public class DateConverter :JsonConverter<DateTime>
    {
       
        public string formatDate = "dd/mm/yyyy";
        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return DateTime.ParseExact(reader.GetString(), formatDate, CultureInfo.InvariantCulture);
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString(formatDate));
        }
    }
}
